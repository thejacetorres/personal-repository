import { Component } from '@angular/core';
import { AboutComponent } from '../about/about';
import { ProjectsComponent } from '../projects/projects';
import { FooterComponent } from '../footer/footer';
import { SITE_DATA } from '../../app.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent, FooterComponent],
  templateUrl: './home.html'
})
export class HomeComponent {
  data = SITE_DATA;
}