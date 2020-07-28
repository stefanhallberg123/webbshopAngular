import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import Product from 'src/app/model/product';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  id = '';
  movie: Product;
  showMovie = false;
  constructor(
    private route: ActivatedRoute,
    private service: MovieService,
    private cartService: ShoppingcartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.id = p.id;
      this.service.movieById.subscribe((m: Product) => {
        this.movie = m;
        this.showMovie = true;
      });
      this.service.getThisMovie(Number(this.id));
    });
  }
  addMovie(movie) {
    this.cartService.addProduct(movie);
  }
}
