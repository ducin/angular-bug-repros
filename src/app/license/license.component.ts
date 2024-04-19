import { Component, Input, inject } from '@angular/core';

import { LicenseService } from '../api/license.service';
import { Observable } from 'rxjs';
import { EmployeesService } from '../api/employees.service';
import { EmployeeListingFacadeService } from '../employees/employee-listing/employee-listing-facade.service';

// w tym komponencie rob imy szajs z DI 🤡

class Dupa {}

@Component({
  selector: 'itcorpo-license',
  template: `<h2>license</h2><pre>{{ content$ | async }}</pre>`,
  styleUrls: ['./license.component.css'],
  providers: [
    EmployeesService,
    [{ provide: Dupa, useClass: Dupa }],
  ]
}) 
export class LicenseComponent {
  content$!: Observable<string | null>;

  // protected facade = inject(EmployeeListingFacadeService)

  constructor(
    private licenseSvc: LicenseService,
    private employeesSvc: EmployeesService,
    private dupa: Dupa,
  ){}

  ngOnInit(): void {
    this.content$ = this.licenseSvc.get()
  }
}
