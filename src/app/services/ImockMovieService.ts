import { Subject } from 'rxjs';
import Product from '../model/product';

export interface ImockMovieService {
  theMovie: Subject<Product[]>;
  getTheMockMovie(): void;
}
