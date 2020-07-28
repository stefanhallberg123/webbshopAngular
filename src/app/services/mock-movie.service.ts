import { Injectable } from '@angular/core';
import Product from '../model/product';
import { Subject } from 'rxjs';
import { ImockMovieService } from './ImockMovieService';

@Injectable({
  providedIn: 'root',
})
export default class MockMovieService implements ImockMovieService {
  private movies: Product[] = [
    {
      name: 'star wars movie',
      year: 1996,
      id: 1,
      description: 'i am your father',
      price: 100,
      imageUrl: 'thisImageUrl.jpg',
      amount: 1,
      productCategory: { categoryId: 1, category: 'sci-fi' },
      categoryList: [],
    },
    {
      name: 'second star wars movie',
      year: 2000,
      id: 2,
      description: 'jabba the hut',
      price: 150,
      imageUrl: 'thisImageUrl2.jpg',
      amount: 1,
      productCategory: { categoryId: 2, category: 'action' },
      categoryList: [],
    },
  ];
  theMovie = new Subject<Product[]>();

  getTheMockMovie(): void {
    this.theMovie.next(this.movies);
  }
}
