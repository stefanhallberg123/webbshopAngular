import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';


describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should delete one object from cart', () => {
    const movie = {
      id: 1, name: 'greatest movie', description: 'greatest movie of all time', price: 99, imageUrl: 'srcToMovie',
      amount: 1, year: 1996, productCategory: { categoryId: 1, category: 'action' }, categoryList: []
    };

    component.deleteFromCart(movie);



    expect(component.productInCart.length).toBe(0);

  });
});
