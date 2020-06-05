import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Product from '../model/product';
import ShoppingCart from '../model/shoppingCart';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private cartService: ShoppingcartService) {}
  productInCart;
  @Input() cart: ShoppingCart;

  currency = 'sek';
  ngOnInit(): void {
    this.productInCart = this.cartService.getCartProducts();
  }
}
