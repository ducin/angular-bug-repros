import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { GeoService } from './api/geo.service';
import { Nationality } from 'src/app/api/dto';
import { EmployeeListingFacadeService } from './employees/employee-listing/employee-listing-facade.service';

@Component({
  selector: 'itcorpo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'IT Corpo Angular App'

  geoData$!: Observable<{ [k: string]: string }>

  constructor(
    private geoSvc: GeoService,
    // private nieTwojaFasada: EmployeeListingFacadeService,
  ){}

  ngOnInit(): void {
    this.geoData$ = this.geoSvc.getGeo()
  }
}
