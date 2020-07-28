import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DeliveryFormComponent } from './delivery-form.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';

describe('DeliveryFormComponent', () => {
  let component: DeliveryFormComponent;
  let fixture: ComponentFixture<DeliveryFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryFormComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
      ],
      providers: [
        DeliveryFormComponent,
        { provide: FormBuilder, useValue: formBuilder },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFormComponent);
    component = fixture.componentInstance;
    component.userform = formBuilder.group({
      firstName: null,
      lastName: null,
      email: null,
      number: null,
      delivery: formBuilder.group({
        adress: null,
        city: null,
        postNumber: null,
      }),
      payment: formBuilder.group({
        payment: null,
      }),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
