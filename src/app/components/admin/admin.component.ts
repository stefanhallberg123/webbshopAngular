import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private orderService: AdminService) {}
  orderlist = [];
  ngOnInit(): void {
    this.orderService.orderlist.subscribe((order: any) => {
      this.orderlist = order;
    });
    this.orderService.getOrders();
  }
  removeOrder(order: Order) {
    this.orderService.deleteOrder(order.id);
    const orders: number = this.orderlist.indexOf(order);
    if (orders !== -1) {
      this.orderlist.splice(orders, 1);
    }
  }
}
