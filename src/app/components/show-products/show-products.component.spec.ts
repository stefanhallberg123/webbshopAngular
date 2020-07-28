import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowProductsComponent } from './show-products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ShowProductsComponent', () => {
  let component: ShowProductsComponent;
  let fixture: ComponentFixture<ShowProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, HttpClientModule],
      declarations: [ShowProductsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add product', () => {
    const spy = spyOn(component.adding, 'emit');

    component.addMovie();

    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
