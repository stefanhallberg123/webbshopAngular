import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import product from '../model/product';
import { ShopService } from '../services/shop.service';
import { Observable } from 'rxjs';
import Product from '../model/product';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  id = '';
  movie: Product;
  showMovie = false;
  constructor(private route: ActivatedRoute, private service: ShopService) {}

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
}
