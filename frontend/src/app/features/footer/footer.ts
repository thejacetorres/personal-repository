import { Component } from '@angular/core';
import { SITE_DATA } from '../../app.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html'
})
export class FooterComponent {
  data = SITE_DATA; // Aquí estamos usando la constante SITE_DATA que definimos en app.constants.ts
  // Aquí podrías manejar la lógica del formulario más adelante
}