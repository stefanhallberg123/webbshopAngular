import Product from '../model/product';
import { Subject } from 'rxjs';

export default interface IProductData {
  theProducts: Subject<Product[]>;

  movieById: Subject<Product>;
  getProducts(): void;
  getThisMovie(id): void;
}
