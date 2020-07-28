import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';
import { IadminService } from './iadmin-service';


@Injectable({
  providedIn: 'root'
})
export class AdminService implements IadminService {

  orderlist = new Subject<Order[]>();
  constructor(private http: HttpClient) { }

  getOrders() {
    const apiUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=1996';

    this.http.get(apiUrl).subscribe((data: any) => {
      this.orderlist.next(data);
    });

  }
  deleteOrder(id: number) {
    const apiUrl = `https://medieinstitutet-wie-products.azurewebsites.net/api/orders/${id}`;

    this.http.delete(apiUrl).subscribe((data: any) => {

    });
  }
}
