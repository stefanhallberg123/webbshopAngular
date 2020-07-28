import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ProductDataComponent } from "./components/product-data/ProductDataComponent";
import { AdminComponent } from './components/admin/admin.component';
import { ThankYouPageComponent } from './components/thank-you-page/thank-you-page.component';
import { GetCategoriesComponent } from './components/get-categories/get-categories.component';

const routes: Routes = [
  { path: '', component: ProductDataComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'thankYou', component: ThankYouPageComponent },
  { path: 'categories', component: GetCategoriesComponent },
  { path: '**', component: ErrorNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
