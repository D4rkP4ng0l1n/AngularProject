import { Component, signal } from '@angular/core';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularProject');
}
