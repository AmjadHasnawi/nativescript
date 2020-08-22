import { Component, OnInit, Input } from "@angular/core";


import { Store} from "../models/store";
import { StoreService } from "../services/store.service";

@Component({
    selector: "ns-store",
    templateUrl: "./store.component.html"
})
export class StoreComponent implements OnInit {

    @Input() relatedStores;
    @Input() stores = [];

    constructor(private storeService: StoreService) { }

    ngOnInit(): void {
        if (this.relatedStores) {
            this.storeService.getSpecificStores(this.relatedStores).subscribe(
                stores => this.stores = stores
            );
        }
    }
}
