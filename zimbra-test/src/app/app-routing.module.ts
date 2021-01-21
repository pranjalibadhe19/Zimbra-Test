import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListingComponent } from "./product-listing/product-listing.component";

const routes: Routes = [
  {
    path: "",
    component: ProductListingComponent
  },
  {
    path: "product-details/:id",
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
