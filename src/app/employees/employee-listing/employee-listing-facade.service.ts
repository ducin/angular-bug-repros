import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { EmployeesService } from 'src/app/api/employees.service';

@Injectable()
export class EmployeeListingFacadeService {

  #employeeSvc = inject(EmployeesService)

  // employees: Signal<Employee[]> = signal([])
  // employees: Signal<Employee[]> = toSignal(this.employeeSvc.getAllEmployees())
  employees = toSignal(this.#employeeSvc.getAllEmployees(), {
    initialValue: [] // TODO: usunąć []
  })

  nameFilter = signal("")

  updateNameFilter($event: Event){
    const newValue = ($event.target as HTMLInputElement).value
    this.nameFilter.set(newValue)
  }

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
  currentPage = this.#currentPage.asReadonly()
  setNextPage = () => {
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
