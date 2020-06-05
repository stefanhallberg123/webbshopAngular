import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import Product from '../model/product';
import IProductData from './iproduct-data';

@Injectable({
  providedIn: 'root',
})
export class ShopService implements IProductData {
  theProducts = new Subject<Product[]>();
  movieById = new Subject<Product>();

  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http
      .get(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
      )
      .subscribe((data: any) => {
        // console.log(data);

        const products: Product[] = data.map((product) => {
          const myProduct = new Product();
          myProduct.category = product.category;
          myProduct.description = product.description;
          myProduct.id = product.id;
          myProduct.imageUrl = product.category;
          myProduct.name = product.name;
          myProduct.price = product.price;
          myProduct.year = product.year;

          return myProduct;
        });
        return this.theProducts.next(data);
      });
  }
  getThisMovie(id) {
    this.http
      .get(
        `https://medieinstitutet-wie-products.azurewebsites.net/api/products/${id}`
      )
      .subscribe((data: any) => {
        // const movies: Product = data.map((movie) => {
        //   const movieId = new Product();
        //   movieId.category = movie.category;
        //   movieId.description = movie.description;
        //   movieId.id = movie.id;
        //   movieId.imageUrl = movie.imageUrl;
        //   movieId.name = movie.name;
        //   movieId.price = movie.price;
        //   movieId.year = movie.year;

        //   return movieId;
        this.movieById.next(data);
      });
  }
}
