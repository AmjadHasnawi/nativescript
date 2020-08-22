import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { StoresComponent } from "./stores/stores.component";
import { StoreDetailComponent } from "./store-detail/store-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/stores", pathMatch: "full" },
    { path: "stores", component: StoresComponent },
    { path: "stores/:id", component: StoreDetailComponent }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
