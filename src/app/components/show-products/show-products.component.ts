import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/model/product';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss'],
})
export class ShowProductsComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {}

  @Input() products: Product;
  @Output() adding = new EventEmitter<Product>();

  ngOnInit(): void {
    this.route.params.subscribe((movie) => {
      this.id = movie.id;
    });
  }

  addMovie() {
    this.adding.emit(this.products);
  }
}
