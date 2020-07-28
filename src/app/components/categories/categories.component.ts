import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Product from 'src/app/model/product';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private service: ShoppingcartService) {}

  @Input() movie: Product;
  @Input() category: number;
  @Output() adding = new EventEmitter<Product>();

  hasCategory = false;

  ngOnInit(): void {
    if (this.movie) {
      this.checkIfMovie();
    }
  }
  checkIfMovie() {
    this.movie.categoryList.forEach((data) => {
      if (data.categoryId === this.category) {
        this.hasCategory = true;
      }
    });
  }
  addmovie(movie) {
    this.service.addProduct(movie);
  }
}
