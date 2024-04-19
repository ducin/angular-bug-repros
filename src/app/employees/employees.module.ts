import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { EmployeesRoutingModule } from './employees-routing.module';

import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailsPageComponent } from './employee-details/employee-details-page.component';
import { EmployeeImageComponent } from './employee-image';
import { NameAndTitlePipe } from './pipes/name-and-title.pipe';
import { FlagPipe } from './pipes/flag.pipe';
import { EmployeesService } from '../api/employees.service';

@NgModule({
  declarations: [
    EmployeeListingComponent,
    EmployeeDetailsComponent,
    EmployeeDetailsPageComponent,
    EmployeeImageComponent,
    NameAndTitlePipe,
    FlagPipe,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ],
  providers: [
    EmployeesService,
    // ______
  ]
})
export class EmployeesModule { }

export default 1
