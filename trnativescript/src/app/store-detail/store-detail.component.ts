import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Store} from "../models/store";
import { StoreService } from "../services/store.service";

@Component({
    selector: "ns-details",
    templateUrl: "./store-detail.component.html"
})
export class StoreDetailComponent implements OnInit {
    store: Store;

    constructor(
        private storeService: StoreService,
        private route: ActivatedRoute,
        private router: Router
    ) { 
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.storeService.getStore(id).subscribe(
            store => this.store = store
        );
    }
}
