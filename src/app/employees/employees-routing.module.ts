import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { EmployeeDetailsPageComponent } from './employee-details/employee-details-page.component';
import { EmployeeDetailsResolverService } from './employee-details-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListingComponent
  },
  {
    path: ':id',
    component: EmployeeDetailsPageComponent,
    resolve: {
      employee: EmployeeDetailsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EmployeeDetailsResolverService]
})
export class EmployeesRoutingModule { }
