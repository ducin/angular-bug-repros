import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenseComponent } from './license/license.component';
import { HomeComponent } from './home/home.component';

import { OfficeListingComponent } from './offices/office-listing/office-listing.component';
import { ProjectListingComponent } from './projects/project-listing/project-listing.component';
import { EmployeeListingComponent } from './employees/employee-listing/employee-listing.component';
import { BenefitListingComponent } from './benefits/benefit-listing/benefit-listing.component';
import { DashboardComponent } from './finances/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'license',
    component: LicenseComponent,
  },
  {
    path: 'offices',
    component: OfficeListingComponent
  },
  {
    path: 'projects',
    component: ProjectListingComponent
  },
  {
    path: 'employees',
    component: EmployeeListingComponent
  },
  {
    path: 'benefits',
    component: BenefitListingComponent
  },
  {
    path: 'finances',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
