import { DestroyRef, assertInInjectionContext, runInInjectionContext, inject, Injector } from "@angular/core";
import { EmployeesService } from "./employees.service";

// co robi effect, toSignal i pierdyliard bibliotek:
function zrobCos(arg: unknown, options?: { injector?: Injector }){
    // assertInInjectionContext(zrobCos) // <- to powinno być w IFie tylko tam gdzie 
    const injector: Injector = options?.injector ?? inject(Injector)
}

// pattern
// TODO: assertInInjectionContext -> upewnij się ŻE (jesteś w kontekście wstrzykiwania)
// TODO: runInInjectionContext

export function injectStreamUtility(){
    assertInInjectionContext(injectStreamUtility)
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
