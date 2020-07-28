import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ProductDataComponent } from "./components/product-data/ProductDataComponent";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeliveryFormComponent } from './components//delivery-form/delivery-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThankYouPageComponent } from './components//thank-you-page/thank-you-page.component';
import { GetCategoriesComponent } from './components/get-categories/get-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CategoriesComponent,
    ErrorNotFoundComponent,
    ShowProductsComponent,
    ShoppingCartComponent,
    MovieDetailComponent,
    ProductDataComponent,
    DeliveryFormComponent,
    ThankYouPageComponent,
    GetCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
