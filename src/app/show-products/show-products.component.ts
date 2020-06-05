import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Product from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../services/shop.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss'],
})
export class ShowProductsComponent implements OnInit {
  id: number;
  constructor(
    private route: ActivatedRoute,
    private service: ShopService,
    private location: Location
  ) {}

  @Input() products: Product;
  @Output() adding = new EventEmitter<Product>();
  @Output() details = new EventEmitter<Product>();

  ngOnInit(): void {
    this.route.params.subscribe((movie) => {
      this.id = movie.id;
    });
  }

  addMovie() {
    this.adding.emit(this.products);
  }
  movieDetails() {
    this.details.emit(this.products);
  }
}
