import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BenefitsRoutingModule } from './benefits-routing.module';

import { BenefitListingComponent } from './benefit-listing/benefit-listing.component';
import { BenefitDetailsComponent } from './benefit-details/benefit-details.component';

@NgModule({
  declarations: [
    BenefitListingComponent,
    BenefitDetailsComponent
  ],
  imports: [
    CommonModule,
    BenefitsRoutingModule,
    SharedModule,
  ]
})
export class BenefitsModule { }
