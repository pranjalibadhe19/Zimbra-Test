import { Component, OnInit } from "@angular/core";
import { ZimbraService } from "./../services/zimbra.service";
import { isNullOrUndefined } from "util";

@Component({
  selector: "app-product-listing",
  templateUrl: "./product-listing.component.html",
  styleUrls: ["./product-listing.component.css"]
})
export class ProductListingComponent implements OnInit {
  categories;
  categoryId;
  products;
  constructor(public zimbraService: ZimbraService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.zimbraService.getCategoriesList().subscribe(resp => {
      this.categories = resp;
      this.categoryId = localStorage.getItem("categoryId");
      if (this.categories.length > 0 && isNullOrUndefined(this.categoryId)) {
        this.categoryId = this.categories[0].id;
        localStorage.setItem("categoryId", this.categoryId);
      }
      this.loadProducts();
    });
  }

  getProducts(categoryId) {
    this.zimbraService.getProductsList(categoryId).subscribe(resp => {
      this.products = resp;
    });
  }

  loadProducts() {
    localStorage.setItem("categoryId", this.categoryId);
    this.getProducts(this.categoryId);
  }
}
