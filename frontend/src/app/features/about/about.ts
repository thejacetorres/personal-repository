import { Component } from '@angular/core';
import { SITE_DATA } from '../../app.constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
})
export class AboutComponent {
  data = SITE_DATA;
}
