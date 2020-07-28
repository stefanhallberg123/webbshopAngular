import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDataComponent } from './ProductDataComponent';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from 'src/app/services/movie.service';
import MockMovieService from 'src/app/services/mock-movie.service';

describe('ProductDataComponent', () => {
  let component: ProductDataComponent;
  let fixture: ComponentFixture<ProductDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDataComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [
        ProductDataComponent,
        { provide: MovieService, useClass: MockMovieService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get my movie', () => {
    expect(component.movies.length).toBeGreaterThan(0);
    expect(component.movies[0].name).toContain('star');
  });
});
