import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ClsCartItem } from '../../Models/cls-cart-item';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../cart-item/cart-item';

@Component({
  selector: 'app-shop-cart',
  imports: [CartItem],
  templateUrl: './shop-cart.html',
  styleUrl: './shop-cart.scss',
})
export class ShopCart implements OnInit {
  serveralCartItem !: ClsCartItem[];

  constructor(private cartService: CartService, private cartItemChangeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cartItems =>{
      this.serveralCartItem = cartItems;
      this.cartItemChangeDetector.detectChanges();
    })
  }
}
