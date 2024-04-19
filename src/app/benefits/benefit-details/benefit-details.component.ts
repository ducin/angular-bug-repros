import { Component, Input, computed, input } from '@angular/core';
import { Benefit } from 'src/app/api/dto';

@Component({
  selector: 'itcorpo-benefit-details',
  templateUrl: './benefit-details.component.html',
  styleUrls: ['./benefit-details.component.css']
})
export class BenefitDetailsComponent {
  // @Input({ required: true })
  // benefit!: Benefit

  benefit = input.required<Benefit>()
  // benefit = input<Benefit>()

  constructor(){
    // this.benefit() // wywołujemy input za wcześnie
  }

  yearlyFee = computed(() => {
    return this.benefit().monthlyFee * 12
  })
}
