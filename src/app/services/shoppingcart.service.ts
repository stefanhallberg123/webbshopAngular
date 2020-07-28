import { Injectable } from '@angular/core';
import { IshoppingCartService } from './ishopping-cart-service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingcartService implements IshoppingCartService {
  cart = [];

  constructor() { }

  addProduct(product) {
    this.cart.push(product);
    const setCartLs = localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  getCartProducts() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems === undefined) {
      return [];

    }
    return cartItems;

  }

  getTotalPrice(): number {
    let totalPrice = 0;
    const cartItems = this.getCartProducts();
    console.log(cartItems);

    cartItems.forEach(item => {

      totalPrice = totalPrice + item.price * item.amount;
    });
    console.log(totalPrice);

    return totalPrice;
  }
}
