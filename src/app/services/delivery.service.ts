import { Injectable } from '@angular/core';
import User from '../model/user';
import { OrderForm } from '../model/orderForm';
import { IadminService } from './iadmin-service';
import { IdeliveryService } from './idelivery-service';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService implements IdeliveryService {
  userInfo = [];
  constructor() { }

  addInfo(userFromForm: OrderForm) {
    this.userInfo.push(userFromForm);
    localStorage.setItem('user', JSON.stringify(this.userInfo));
  }
  getUserInfo() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
