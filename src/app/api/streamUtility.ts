import { DestroyRef, inject } from "@angular/core";
import { EmployeesService } from "./employees.service";

// pattern
// TODO: assertInInjectionContext

export function injectStreamUtility(){
    const destroyRef = inject(DestroyRef)
    // kiedy to jest niszczone - zależy
    // - zależy od tego KIEDy injector jest niszczony
    // a że injectory mogą być: EnvironmentInjector (root/platform/null) albo ElementInjector (comp/directive)

    // załóżmy że czyścimy coś na TYM serwisie:
    // "ZASADNICZY" (właściwy) serwis
    const employeeSvc = inject(EmployeesService)

    // initialize:
    console.log('witaj świecie')
    // cleanup:
    destroyRef.onDestroy(() => console.log('żegnaj świecie'))
    destroyRef.onDestroy(() => console.log('żegnaj świecie po raz drugi'))

    return employeeSvc
}
