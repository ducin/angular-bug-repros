import { Component, OnInit, computed, signal, effect, untracked, Signal, model, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'

import { Observable } from 'rxjs';

import { Employee } from 'src/app/api/dto';

import { EmployeesService } from 'src/app/api/employees.service';
import { EmployeeListingFacadeService } from './employee-listing-facade.service';

export var obj = {
  value: signal(0)
}

@Component({
  selector: 'itcorpo-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css'],
  providers: [EmployeeListingFacadeService] // ElementInjector
})
export class EmployeeListingComponent implements OnInit {
  // employees$!: Observable<Employee[]>

  protected facade = inject(EmployeeListingFacadeService)

  sidebarCollapsed: boolean = true

  cities = {
    "Wilno": "Wilno",
    "Lwów": "Lwów",
  }

  // constructor(
  //   private employeeSvc: EmployeesService,
  // ) { }

  onToggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed
  }

  ngOnInit() {
    effect(() => {
      console.log('siema mordo', this.facade.employeesCount())
    })
    // TODO: share() vs shareReplay(1)
    // this.employees$ = this.employeeSvc.getAllEmployees()
    // this.employees$ = this.employeeSvc.getAllEmployees({ nationality: "PL" })
    // this.employees$ = this.employeeSvc.getAllEmployees({ office_like: "Poland" })
    // this.employees$ = this.employeeSvc.getAllEmployees({ office_like: "Łódź" })

// każdy "odpytany" sygnał musi zwrócić jakąś wartość

    // let counter = signal(0) // BehaviorSubject
    // counter.set(10)
    // counter.update(v => v + 1)
    // let currentValue = counter() // tworzenie zmiennej która przechowuje aktualną wartość: 🟥 flag

    // // let square = computed(() => counter() * counter())
    // let square = computed(() => {
    //   if (counter() % 2 === 0) {
    //     return counter() * counter()
    //   } else {
    //     return exchange()
    //   }
    // })
    // let currentSquare = square()

    // effect(() => { // SIDE EFFECT
    //   console.log("square", square())
    // })

    // const exchange = computed(() => amount() / rate())
  }
}
