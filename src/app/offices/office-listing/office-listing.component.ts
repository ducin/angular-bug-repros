import { Component, OnInit } from '@angular/core';
import { OfficesService } from 'src/app/api/offices.service';

import { Observable } from 'rxjs';

import { Office } from 'src/app/api/dto';

@Component({
  selector: 'itcorpo-office-listing',
  templateUrl: './office-listing.component.html',
  styleUrls: ['./office-listing.component.css']
})
export class OfficeListingComponent implements OnInit {
  offices$: Observable<Office[]>

  constructor(
    private officeSvc: OfficesService,
  ) { }

  ngOnInit() {
    this.offices$ = this.officeSvc.getAllOffices()
    // this.offices$ = this.officeSvc.getAllOffices('Poland')
  }

}
