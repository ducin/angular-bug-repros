import { Component, Input } from '@angular/core';

import { Expense } from 'src/app/api/dto';

@Component({
  selector: 'itcorpo-expenses-listing',
  templateUrl: './expenses-listing.component.html',
  styleUrls: ['./expenses-listing.component.css']
})
export class ExpensesListingComponent {
  @Input()
  expenses!: Expense[]
}
