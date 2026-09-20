import { Component } from '@angular/core';
import { SITE_DATA } from '../../app.constants';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  data = SITE_DATA;
}
