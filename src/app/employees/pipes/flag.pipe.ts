import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from 'src/app/api/dto';
import { flag } from '../../shared/contexts/nationality';

// PURE FUNCTION:
// - zależy w 100% od swoich input parameters (np. nie czytam NIC ze scope'ów zewn.)
// - w 100% deterministyczny wynik (dla tych samych inputów zawsze zwraca tę samą wartość)
  // Math.random(), new Date()
// - nie zmienia świata zewn.
// - pure functions są ws 100% keszowalne + zajebiście testowalne + zajebiście refaktorowalne + wydajniejsze :)
//   np. () => 1


// pipe NIE może być pure kiedy:
// - jeżeli używamy czegokolwiek SPOZA parametrów transform (spoza pipe'a), np. stanowy DI
// - jeżeli pipe sam w sobie jest stanowy
@Pipe({
  name: 'flag',
  pure: true // default
  // pure: false // NIE MA KESZOWANIA NEVER EVER - (potencjalnie) dużo gorszy performance
})
export class FlagPipe implements PipeTransform {

  // #statefulService = inject(CośTam) // NIE OK
  // #statelessService = inject(CośTam) // OK

  ostatniaWartosc = null

  transform(e: Employee): string { // Object.is
    return flag(e.nationality)
    // return flag(e.nationality) + this.#statefulService.jakieśPole
  }

}
