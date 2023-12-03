import { Component, Input } from '@angular/core';

@Component({
  selector: 'itcorpo-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input()
  headers!: string[]

  @Input()
  rows!: string[][]
}
