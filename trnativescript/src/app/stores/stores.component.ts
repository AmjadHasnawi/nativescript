import { Component, OnInit } from "@angular/core";

import { Store} from "../models/store";
import { StoreService } from "../services/store.service";

@Component({
    selector: "ns-stores",
    templateUrl: "./stores.component.html"
})
export class StoresComponent implements OnInit {
    stores: Array<Store>;

    constructor(private storeService: StoreService) { }

    ngOnInit(): void {
        this.storeService.getStores().subscribe(
            stores => this.stores = stores
        );
    }
}
