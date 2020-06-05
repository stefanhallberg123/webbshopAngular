import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingcartService {
  cart = [];
  constructor() {}

  addProduct(product) {
    this.cart.push(product);
  }
  getCartProducts() {
    return this.cart;
  }
}
