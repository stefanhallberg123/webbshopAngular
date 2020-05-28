import { Injectable } from '@angular/core';
import Product from '../model/product';
import { Subject, observable, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  getProducts: any;
  constructor() {}

  // private ProductSource = new Subject<Product>();

  // gotProduct = this.ProductSource.asObservable();

  // printingProduct(getProduct: Product) {
  //   this.ProductSource.next(getProduct);
  // }
  products: Product[];
  getData(): Observable<Product[]> {
    return of(this.products);
  }

  async getdata(): Promise<Product[]> {
    let data = await fetch(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
    );
    let result: any = await data.json();

    let products: Product[] = result.Search.map((result: any) => {
      let product: Product = new Product();
      product.name = result.name;
      product.price = result.price;
      product.description = result.description;
      product.category = result.category;
      product.imageUrl = result.imageUrl;
      product.id = result.id;
      product.year = result.year;
      return product;
    });
    return products;
    // const myObservable = of(products);
    // const myObserver = {
    //   next: (x) => console.log(x),
    //   error: (err) => console.log('error' + err),
    //   complete: () => console.log('yey'),
    // };
    // myObservable.subscribe(myObserver);
  }
}
