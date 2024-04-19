import { Component, EventEmitter, Input, Output, computed, input, output, model } from '@angular/core';
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

  // po nowemu
  // albo input()
  benefit = input.required<Benefit>()
  // benefit = input<Benefit>()
  // albo model()
  // benefit = model.required<Benefit>()
  // benefit = model<Benefit>()
  // model akceptuje ALBO wartość (obiekt/prymityw - czyli tak samo jak input)
  // albo SYGNAŁ

  show = model.required<boolean>()

  // constructor(){
    // this.benefit() // wywołujemy input za wcześnie
  // }

  yearlyFee = computed(() => {
    // const newBenefit = this.benefit()
    // newBenefit.monthlyFee++ // jak już nie będzie zone.js - to przestanie działać
    // benefit.set(newBenefit)
    // this.show.
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
