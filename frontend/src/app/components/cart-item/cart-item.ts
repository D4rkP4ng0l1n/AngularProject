import { Component, Input } from '@angular/core';
import { ClsCartItem } from '../../Models/cls-cart-item';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItem {
  @Input() cartItem !: ClsCartItem;
}
