import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

import { Store} from "../models/store";
import  stores from '../models/stores.json';

@Injectable({
    providedIn: "root"
})
export class StoreService {
   
    getStores(): Observable<Store[]> {
        return of(stores);
    }

    getSpecificStores(ids) : Observable<Store[]> {
        return of(stores.filter((store) => ids.includes(store.id)));
    }

    getStore(id: number): Observable<Store> {
        return of(stores.filter((store) => store.id === id)[0]);
    }
}
