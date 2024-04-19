import { computed, inject } from '@angular/core'
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals'
import { injectStreamUtility } from 'src/app/api/streamUtility'
import { EmployeeDataProviderService } from 'src/app/data-providers/employee-data-provider.service'

// nameFilter, updateNameFilter, 

type EmployeeListingState = {
    nameFilter: string
}

const initialState: EmployeeListingState = {
    nameFilter: ''
}

export const employeeListingStore = signalStore(
    withState(initialState),
    withComputed(({ nameFilter }, dataProvider = inject(EmployeeDataProviderService)) => ({
        displayedEmployees: computed(() => {
            const phrase = nameFilter().toLowerCase()
            const filtered = dataProvider.employees().filter(e =>
              e.firstName.toLowerCase().includes(phrase) || e.lastName.toLowerCase().includes(phrase) )
            return filtered;
        })
    })),
    withMethods((store) => ({
        updateNameFilter(newFilter: string): void {
            patchState(store, (state) => ({ nameFilter: newFilter }));
        },
    })),
)
