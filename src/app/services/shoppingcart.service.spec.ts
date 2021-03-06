import { TestBed } from '@angular/core/testing';

import { ShoppingcartService } from './shoppingcart.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ShoppingcartService', () => {
  let service: ShoppingcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
    });

    service = TestBed.inject(ShoppingcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
