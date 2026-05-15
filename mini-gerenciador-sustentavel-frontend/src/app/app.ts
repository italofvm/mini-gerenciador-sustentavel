import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';
import { ItemComponent } from './components/item/item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('mini-gerenciador-sustentavel-frontend');
}
