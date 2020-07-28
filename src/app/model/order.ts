import { OrderRows } from './orderRow';

export class Order {
  companyId: number;
  createdBy: string;
  paymentMethod: string;
  orderRows: OrderRows[];
  created: Date;
  status: number;
  totalPrice: number;
  id: number;
}
