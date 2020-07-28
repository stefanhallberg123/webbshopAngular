import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import { MovieService } from 'src/app/services/movie.service';
import Product from 'src/app/model/product';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss'],
})
export class DeliveryFormComponent implements OnInit {
  shoppingCartItems: Product[] = [];

  constructor(
    private fb: FormBuilder,
    private shoppingcartService: ShoppingcartService,
    private orderService: MovieService
  ) {}

  get firstName() {
    return this.userform.get('firstName');
  }
  get lastName() {
    return this.userform.get('lastName');
  }
  get email() {
    return this.userform.get('email');
  }
  get number() {
    return this.userform.get('number');
  }
  get adress() {
    return this.userform.get('delivery').get('adress');
  }
  get postNumber() {
    return this.userform.get('delivery').get('postNumber');
  }
  get city() {
    return this.userform.get('delivery').get('city');
  }
  get payment() {
    return this.userform.get('payment').get('payment');
  }

  userform = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    number: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
    payment: this.fb.group({
      payment: ['', Validators.required],
    }),
    delivery: this.fb.group({
      adress: ['', [Validators.required, Validators.minLength(3)]],
      postNumber: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
      city: ['', [Validators.required, Validators.minLength(3)]],
    }),
  });

  ngOnInit(): void {
    this.shoppingCartItems = this.shoppingcartService.getCartProducts();
  }
  sendOrder() {
    const order = new Order();
    order.companyId = 1996;
    order.createdBy = this.userform.value.firstName;
    order.created = new Date();
    order.paymentMethod = this.userform.value.payment.payment;
    order.totalPrice = this.shoppingcartService.getTotalPrice();
    order.status = 1;
    order.orderRows = [];

    const orderDetails = this.shoppingCartItems.map((details) => {
      return {
        productId: details.id,
        amount: details.amount,
        product: null,
      };
    });
    orderDetails.forEach((product) => {
      order.orderRows.push(product);
    });
    this.orderService.newOrder(order);

    window.localStorage.clear();
  }
}
