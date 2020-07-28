import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import Product from 'src/app/model/product';

@Component({
  selector: 'app-get-categories',
  templateUrl: './get-categories.component.html',
  styleUrls: ['./get-categories.component.scss'],
})
export class GetCategoriesComponent implements OnInit {
  movies: Product[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.theMovie.subscribe((movies: Product[]) => {
      this.movies = movies;
    });
    this.movieService.getMovie();
  }
}
