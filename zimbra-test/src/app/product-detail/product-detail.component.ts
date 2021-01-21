import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ZimbraService } from "../services/zimbra.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  sub;
  product;
  category;
  constructor(
    private route: ActivatedRoute,
    private zimbraService: ZimbraService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.getProductById(params["id"]);
    });
  }

  getProductById(productId) {
    this.zimbraService.getProductById(productId).subscribe(resp => {
      this.product = resp[0];
      this.getCategory(this.product.categoryId);
    });
  }

  getCategory(categoryId) {
    this.zimbraService.getCategoryById(categoryId).subscribe(resp => {
      this.category = resp[0];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
