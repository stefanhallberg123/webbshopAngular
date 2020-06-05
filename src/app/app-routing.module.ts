import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ProductDataComponent } from './product-data/product-data.component';

const routes: Routes = [
  { path: '', component: ProductDataComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: '**', component: ErrorNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
