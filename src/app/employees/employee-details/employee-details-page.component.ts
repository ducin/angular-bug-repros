import { Component } from '@angular/core';
import { Employee } from 'src/app/api/dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'itcorpo-employee-details-page',
  template: `<itcorpo-employee-details [employee]="employee"></itcorpo-employee-details>`
})
export class EmployeeDetailsPageComponent {
  employee!: Employee

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.employee = this.route.snapshot.data.employee
  }
}
