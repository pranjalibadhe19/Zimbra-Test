import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ZimbraService {
  constructor(private http: HttpClient) {}

  getCategoriesList() {
    return this.http.get('http://localhost:3000/categories');
  }
  
  getCategoryById(categoryId) {
    return this.http.get('http://localhost:3000/categories?id='+categoryId);
  }
  
  getProductsList(categoryId) {
    return this.http.get('http://localhost:3000/products?categoryId='+categoryId);
  }
  
  getProductById(productId) {
    return this.http.get('http://localhost:3000/products?id='+productId);
  }

}
