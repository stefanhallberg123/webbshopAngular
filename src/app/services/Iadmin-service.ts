import { Subject } from 'rxjs';
import { Order } from '../model/order';

export interface IadminService {
  orderlist: Subject<Order[]>;
  getOrders(): void;
  deleteOrder(id): void;
}
