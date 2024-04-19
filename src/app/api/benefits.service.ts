import { Injectable, Injector, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiURL } from './config';
import { Benefit } from 'src/app/api/dto';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {

  constructor(
    private http: HttpClient
  ) { }

  #injector = inject(Injector) // root injector

  deleteBenefit(id: Benefit['id']) {
    return this.http.delete(`${apiURL}/benefits/${id}`)
  }

  getBenefit(id: Benefit['id']) {
    return this.http.get<Benefit>(`${apiURL}/benefits/${id}`)
  }

  getPage(page: number = 1, pageSize = 50) {
    return this.http.get<Benefit[]>(`${apiURL}/benefits?_limit=${pageSize}&_page=${page}`)
  }

  getCount() {
    return this.http.get<number>(`${apiURL}/benefits/count`)
  }

  getAllBenefits() {
    return this.getPage()
  }
}
