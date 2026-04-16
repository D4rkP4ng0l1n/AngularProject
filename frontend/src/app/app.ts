import { Component, OnInit } from '@angular/core';
import { ProductCard } from './Components/product-card/product-card';
import { ClsProduct } from './Models/cls-product-card';

@Component({
  selector: 'app-root',
  imports: [ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  product !: ClsProduct;

  ngOnInit(): void {
    this.product = new ClsProduct("Freddy Fazbear", "/img/Freddy.webp");
  }
}
