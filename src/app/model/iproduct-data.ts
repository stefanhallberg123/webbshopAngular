import Product from './product';

export interface IProductData {
  getdata(): Promise<Product[]>;
}
