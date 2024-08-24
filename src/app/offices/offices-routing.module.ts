import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficeListingComponent } from './office-listing/office-listing.component';

const routes: Routes = [
  {
    path: '',
    component: OfficeListingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficesRoutingModule { }
