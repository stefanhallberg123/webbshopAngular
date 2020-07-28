import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouPageComponent } from './thank-you-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ThankYouPageComponent', () => {
  let component: ThankYouPageComponent;
  let fixture: ComponentFixture<ThankYouPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThankYouPageComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get a ordernumber', () => {
    const calcylateOrderNumber = component.orderNumber;
    expect(calcylateOrderNumber).toBeTruthy();
  });
});
