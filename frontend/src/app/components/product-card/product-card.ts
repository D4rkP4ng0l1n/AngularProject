import { Component, Input } from '@angular/core';
import { ClsProduct } from '../../Models/cls-product-card';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input() product !: ClsProduct;

  constructor(private cartService: CartService) { }

  add(productId: string) {
    this.cartService.addToCart(productId, 1).subscribe({
      next: (res) => {
        console.log('Ajouté au panier', res);
      },
      error: (err) => {
        console.error('Erreur ajout panier', err);
      }
    })
  }
}
