import { Component, OnInit } from '@angular/core';
import Product from 'src/app/model/product';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private cartService: ShoppingcartService) {}
  productInCart;

  deleteFromCart(product: Product) {
    for (let i = 0; i < this.productInCart.length; i++) {
      if (this.productInCart[i] === product) {
        this.productInCart.splice(i, 1);
      }
    }
    const setCartLs = localStorage.setItem(
      'cart',
      JSON.stringify(this.productInCart)
    );
  }

  ngOnInit(): void {
    this.productInCart = this.cartService.getCartProducts();
  }
}
