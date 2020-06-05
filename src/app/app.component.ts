import { Component } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'STEFLIX';
  faCartPlus = faCartPlus;
}
