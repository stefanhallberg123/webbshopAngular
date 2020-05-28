import { Component, OnInit } from '@angular/core';
import Product from '../model/product';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private service: ShopService) {}
  // getdata()
  // data = fromFetch(
  //   'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
  // ).pipe(
  //   map((result) => {
  //     return result.json();
  //   })
  // );
  products: Product[];
  getProducts(): void {
    this.service.getData().subscribe((products) => (this.products = products));
  }

  ngOnInit(): void {
    // this.service.gotProduct.subscribe((product: Product) => {
    //   console.log(product.name);
    this.getProducts();
    console.log(this.products);
  }

  // this.data.subscribe({
  //   next: (result) => console.log(result),
  //   complete: () => console.log('complete'),
  // });
}
