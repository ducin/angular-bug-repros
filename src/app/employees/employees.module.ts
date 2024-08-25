import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { EmployeesRoutingModule } from './employees-routing.module';

import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailsPageComponent } from './employee-details/employee-details-page.component';
import { EmployeeImageComponent } from './employee-image';
import { NameAndTitlePipe } from './name-and-title.pipe';
import { FlagPipe } from './flag.pipe';
import { EmployeesService } from '../api/employees.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    EmployeeListingComponent,
    EmployeeDetailsComponent,
    EmployeeDetailsPageComponent,
    EmployeeImageComponent,
    NameAndTitlePipe,
    FlagPipe,
  ],
  // 👇 HERE
  providers: [{
    provide: EmployeesService,
    useFactory: () => {
      const http = inject(HttpClient)
      const svc = new EmployeesService(http)
      svc.origin = 'employees.module'
      return svc
    }
  }],
  // 👆 HERE
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
