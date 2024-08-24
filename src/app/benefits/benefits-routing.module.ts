import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenefitListingComponent } from './benefit-listing/benefit-listing.component';

const routes: Routes = [
  {
    path: '',
    component: BenefitListingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenefitsRoutingModule { }
