import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import Product from '../model/product';
import { Category } from '../model/category';
import { Order } from '../model/order';
import { ImovieService } from './imovie-service';

@Injectable({
  providedIn: 'root',
})
export class MovieService implements ImovieService {
  constructor(private http: HttpClient) {}
  thisMockMovie: Subject<Product[]>;
  getTheMockMovie(): void {
    throw new Error('Method not implemented.');
  }
  theMovie = new Subject<Product[]>();
  movieById = new Subject<Product>();
  categories = new Subject<Category[]>();

  private readonly postAPi =
    'https://medieinstitutet-wie-products.azurewebsites.net/api/orders';
  order: Order = new Order();
  postUrl = this.postAPi;

  getMovie() {
    this.getCategories();
    this.categories.subscribe((categories: Category[]) => {
      this.http
        .get(
          'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
        )
        .subscribe((data: any) => {
          const movies: Product[] = data.map((movie: any) => {
            const myMovie = new Product();
            myMovie.description = movie.description;
            myMovie.id = movie.id;
            myMovie.imageUrl = movie.imageUrl;
            myMovie.name = movie.name;
            myMovie.price = movie.price;
            myMovie.year = movie.year;
            myMovie.categoryList = [];
            myMovie.amount = 1;

            movie.productCategory.forEach((element) => {
              categories.forEach((e) => {
                if (element.categoryId === e.categoryId) {
                  const myCategory = new Category();

                  myCategory.category = e.category;
                  myCategory.categoryId = element.categoryId;

                  myMovie.categoryList.push(myCategory);
                }
              });
            });
            return myMovie;
          });
          return this.theMovie.next(movies);
        });
    });
  }
  getThisMovie(id) {
    this.http
      .get(
        `https://medieinstitutet-wie-products.azurewebsites.net/api/products/${id}`
      )
      .subscribe((data: any) => {
        this.movieById.next(data);
      });
  }

  getCategories() {
    this.http
      .get(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/categories'
      )
      .subscribe((data: any) => {
        const categories: Category[] = data.map((category: any) => {
          const myCategory = new Category();
          myCategory.category = category.name;
          myCategory.categoryId = category.id;
          return myCategory;
        });
        this.categories.next(categories);
      });
  }

  newOrder(order: Order): void {
    this.http.post<Order>(this.postUrl, order).subscribe((data: Order) => {
      console.log('funktionen körs');
      this.order = data;
    });
    console.log(order);
  }
}
