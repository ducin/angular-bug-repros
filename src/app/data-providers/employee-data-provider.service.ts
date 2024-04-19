import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { injectStreamUtility } from '../api/streamUtility';

// w prawdziwej aplikacji - ten serwis jesty usuwany
// i zastąpiony przez angular-query

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataProviderService {

  #employeeSvc = injectStreamUtility()

  // Server State
  employees = toSignal(this.#employeeSvc.getAllEmployees(), {
    // injector, 
    initialValue: [] // TODO: usunąć []
  })

  // a co z logiką odświeżania danych?!?!?!

  // aco z rozróżnieniem na dane-listingi i dane-detale pojedynczego rekordu
}
