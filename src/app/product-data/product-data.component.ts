import { Component, OnInit } from '@angular/core';
import Product from '../model/product';
import { ShopService } from '../services/shop.service';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.scss'],
})
export class ProductDataComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ShopService,
    private cartService: ShoppingcartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.theProducts.subscribe((product: Product[]) => {
      // console.log(product);
      this.products = product;
    });
    this.productService.getProducts();
  }
  addToCart(product) {
    this.cartService.addProduct(product);
  }
  detailsMovie(detailproduct) {
    // console.log(detailproduct);
  }
}
