import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'itcorpo-fadebox',
  template: `<div class="fade-box" [ngClass]="{'fade-in': !currentlyFadeOut, 'fade-out': currentlyFadeOut}">
  <ng-content></ng-content>
</div>
`,
  styleUrls: ['./fadebox.component.css']
})
export class FadeboxComponent implements OnInit {

  public fadeOutON = false
  public currentlyFadeOut = true

  constructor() {}

  ngOnInit() {
    if (this.fadeOutON){
      setInterval(() => this.currentlyFadeOut = !this.currentlyFadeOut, 3000)
    }
  }

}
