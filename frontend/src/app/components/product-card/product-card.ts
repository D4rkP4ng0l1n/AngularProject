import { Component, Input } from '@angular/core';
import { ClsProduct } from '../../Models/cls-product-card';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input() product !: ClsProduct;
}
