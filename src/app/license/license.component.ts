import { Component, Input } from '@angular/core';

import { LicenseService } from '../api/license.service';
import { Observable } from 'rxjs';
import { EmployeesService } from '../api/employees.service';

class Dupa {}

@Component({
  selector: 'itcorpo-license',
  template: `<h2>license</h2><pre>{{ content$ | async }}</pre>`,
  styleUrls: ['./license.component.css'],
  providers: [
    EmployeesService,
    [{ provide: Dupa, useClass: Dupa }]
  ]
}) 
export class LicenseComponent {
  content$!: Observable<string | null>;

  constructor(
    private licenseSvc: LicenseService,
    private employeesSvc: EmployeesService,
    private dupa: Dupa,
  ){}

  ngOnInit(): void {
    this.content$ = this.licenseSvc.get()
  }
}
