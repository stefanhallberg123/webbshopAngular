import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CreateOrdersComponent } from './create-orders/create-orders.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CreateOrdersComponent,
    CategoriesComponent,
    SearchComponent,
    ErrorNotFoundComponent,
    ContactComponent,
    AboutComponent,
    ShowProductsComponent,
    ShoppingCartComponent,
    MovieDetailComponent,
    ProductDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
