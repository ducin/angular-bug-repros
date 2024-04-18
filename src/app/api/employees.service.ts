import { DestroyRef, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiURL } from './config';
import { applyQueryString } from './queryString';

import { Employee, Nationality } from 'src/app/api/dto';
import { concat, merge, scan } from 'rxjs';

export type EmployeeCriteria = {
  nationality?: Nationality
  office_like?: string // for either cities or countries
}

export function injectMojeSerwisy(){
  const http = inject(HttpClient)
  // cuda wianki, dzikie węże (dodatkowa logika)
  // np. injection context ALBO destroyRef
  return http
}

@Injectable({
  providedIn: 'root',
})
// TODO:
// export class EmployeesHTTPService {
export class EmployeesService {

  // constructor(
  //   private http: HttpClient
  // ) { }

  // constructor (injection context - CZAS kiedy wolno wstrzykiwać zależności):
  #http = inject(HttpClient)
  // #http = injectMojeSerwisy()
  #destroyRef = inject(DestroyRef) // cleanup

  deleteEmployee(id: Employee['id']) {
    return this.#http.delete(`${apiURL}/employees/${id}`)
  }

  getEmployee(id: Employee['id']) {
    return this.#http.get<Employee>(`${apiURL}/employees/${id}`)
  }

  getPage(criteria: EmployeeCriteria = {}, page: number = 1, pageSize = 50) {
    const query = applyQueryString({ ...criteria, 
      _limit: pageSize,
      _page: page
    })
    return this.#http.get<Employee[]>(`${apiURL}/employees${query}`)
  }

  getCount(criteria: EmployeeCriteria = {}) {
    const query = applyQueryString(criteria)
    return this.#http.get<number>(`${apiURL}/employees/count${query}`)
  }

  getAllEmployees(criteria: EmployeeCriteria = {}) {
    return concat(
      this.getPage(criteria), // 50
      this.getPage(criteria, 2), // 100
      this.getPage(criteria, 3), // 150
      this.getPage(criteria, 4), // 200
      this.getPage(criteria, 5), // 250
    ).pipe(
      scan( (allPagesSoFar, page) => [...allPagesSoFar, ...page], [] as Employee[] )
    )

    // return this.getPage(criteria, 2) // 2
    // return this.getPage(criteria, 3) // 3
    // return this.getPage(criteria, 4) // 4
    // return this.getPage(criteria, 5) // 5
    
    // page: 27
  }
}
