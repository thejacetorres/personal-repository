import { Component } from '@angular/core';

interface Project {
  id: number;
  image: string;
  alt: string;
  title?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  projects: Project[] = [
    { id: 1, image: '/project/01.jpg', alt: 'Proyecto 1' },
    { id: 2, image: '/project/02.jpg', alt: 'Proyecto 2' },
    { id: 3, image: '/project/03.jpg', alt: 'Proyecto 3' },
    { id: 4, image: '/project/04.jpg', alt: 'Proyecto 4' },
    { id: 5, image: '/project/05.jpg', alt: 'Proyecto 5' },
    { id: 6, image: '/project/06.jpg', alt: 'Proyecto 6' },
    { id: 7, image: '/project/07.jpg', alt: 'Proyecto 7' },
    { id: 8, image: '/project/08.jpg', alt: 'Proyecto 8' },
  ];
}
