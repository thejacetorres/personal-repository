import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';
import { NavbarComponent } from '../navbar/navbar';
import { ChatButtonComponent } from '../../shared/chat-button/chat-button';

@Component({
  selector: 'app-shell',
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarComponent,
    ChatButtonComponent
],
  templateUrl: './shell.html'
})
export class ShellComponent {
}