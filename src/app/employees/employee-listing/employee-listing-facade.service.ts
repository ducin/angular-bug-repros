import { DestroyRef, Injectable, Injector, computed, effect, inject, runInInjectionContext, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { EmployeesService } from 'src/app/api/employees.service';
import { injectStreamUtility } from 'src/app/api/streamUtility';
import { EmployeeDataProviderService } from 'src/app/data-providers/employee-data-provider.service';

// surowe serwisy są spoko w mniejszej skali
// jeśli to się zacznie rozrastać - rozważamy przejście na ngrx SIGNAL store
// (nie stary ngrx rxjs-owy 🤮)
//  jakie mamy korzyści z SIGNAL store?
// - większy porządek
// - kompozycja (większy store'a zawiera w sobie reuzywalne mniejsze store'y)

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class EmployeeListingFacadeService {

  #injector = inject(Injector)
  #employeeSvc = injectStreamUtility()

  // gdyby to był komponent ;)
  ngOnInit(){
    this.#employeeSvc = runInInjectionContext(this.#injector, injectStreamUtility)
  }
  // #employeeSvc = inject(EmployeesService)
  // #destroyRef = inject(DestroyRef)
  
  // constructor(
  //   private destroyRef: DestroyRef
  // ){
  //   // cleanup/destruction:
  //   this.destroyRef.onDestroy(() => console.log('żegnaj świecie'))
  //   this.destroyRef.onDestroy(() => console.log('żegnaj świecie po raz drugi'))
  // }

  // REQUEST (HTTP) jest wywoływane natychmiastowo w toSignal() czyli podczas tworzenia obiektu
  // GDYBY serwis był globalny, to jest hipotetycznie tworzony WCZEŚNIEJ niż dane trzeba będzie wyświetlić
  // w efekcie, REQUEST (HTTP) jest wywoływany potencjalnie zanim dane będą wyświetlone

  // employees: Signal<Employee[]> = signal([])
  // employees: Signal<Employee[]> = toSignal(this.employeeSvc.getAllEmployees())

  #employeeProvider = inject(EmployeeDataProviderService)
  employees = this.#employeeProvider.employees // Single Source of Truth

  // Local State
  nameFilter = signal("", { equal: (a, b) => Object.is(a, b)})
  // nameFilter = signal("", { equal: Object.is })

  updateNameFilter($event: Event){
    const newValue = ($event.target as HTMLInputElement).value
    this.nameFilter.set(newValue)
  }

  // Server State Derivation
  employeesCount = computed(() => this.employees().length)

  // client-side pagination
  #pageSize = signal(10) // writable - private
  pageSize = this.#pageSize.asReadonly() // readonly - public
  setPageSize = (size: number) => { // updating API methods - public
    if (this.#currentPage() > this.totalPages()) {
      this.#currentPage.set(1)
    }
    this.#pageSize.set(size)
  }

  #currentPage = signal(1)
  currentPage = this.#currentPage.asReadonly() // public read
  setNextPage = () => { // public updaters które chronią reguły
    if(this.nextEnabled()){
      this.#currentPage.update(v => v + 1)
    }
  }
  setPrevPage = () => {
    if(this.prevEnabled()){
      this.#currentPage.update(v => v - 1)
    }
  }

  totalPages = computed(() => Math.ceil(this.employeesCount() / this.#pageSize()))
  prevEnabled = computed(() => this.#currentPage() > 1)
  nextEnabled = computed(() => this.#currentPage() < this.totalPages())

  readonly pageSizes = [10, 25, 50]

  displayedEmployees = computed(() => {
    const phrase = this.nameFilter().toLowerCase()
    const filtered = this.employees().filter(e =>
      e.firstName.toLowerCase().includes(phrase) || e.lastName.toLowerCase().includes(phrase) )
    return filtered.slice((this.#currentPage() - 1) * this.#pageSize(), this.currentPage() * this.pageSize())
  })

  displayedCount = computed(() => this.displayedEmployees().length)

  logEffect = effect(() => {
    console.log("nameFilter:", this.nameFilter())
  })
}
