import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.scss'],
})
export class ThankYouPageComponent implements OnInit {
  constructor() {}
  orderNumber = [];
  calcylateOrderNumber = Math.floor(Math.random() * 10000 + 1);

  ngOnInit(): void {
    this.orderNumber.push(this.calcylateOrderNumber);
    localStorage.setItem('orderNumber', JSON.stringify(this.orderNumber));
  }
}
