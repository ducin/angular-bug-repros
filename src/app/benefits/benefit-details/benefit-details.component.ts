import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';
import { Subject } from 'rxjs';
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

  // constructor(){
    // this.benefit() // wywołujemy input za wcześnie
  // }

  yearlyFee = computed(() => {
    return this.benefit().monthlyFee * 12
  })

  onRemoveClick(){
    this.remove.emit(this.benefit().id)
  }

  // po staremu:
  // @Output()
  // remove = new EventEmitter<Benefit['id']>()
  // mojPojebanySubject = new Subject<{}>()

  // constructor(){
  //   this.remove.subscribe(this.mojPojebanySubject);
  // }

  // po nowemu:
  remove = output<Benefit['id']>()
}
