import { Subject } from 'rxjs';
import Product from '../model/product';
import { Category } from '../model/category';

export interface ImovieService {
  theMovie: Subject<Product[]>;
  categories: Subject<Category[]>;
  movieById: Subject<Product>;

  getMovie(): void;
  getThisMovie(id): void;
  getCategories(): void;
  newOrder(order): void;
}
