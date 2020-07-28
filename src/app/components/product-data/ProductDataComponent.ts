import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import Product from 'src/app/model/product';
import MockMovieService from 'src/app/services/mock-movie.service';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.scss'],
})
export class ProductDataComponent implements OnInit {
  movies: Product[] = [];
  mockMovies: Product[] = [];
  constructor(
    private movieService: MovieService,
    private cartService: ShoppingcartService
  ) {}

  ngOnInit(): void {
    this.showMovies();
  }
  showMovies() {
    this.movieService.theMovie.subscribe((movies: Product[]) => {
      this.movies = movies;
    });
    this.movieService.getMovie();
  }
  addToCart(product) {
    this.cartService.addProduct(product);
  }
}
