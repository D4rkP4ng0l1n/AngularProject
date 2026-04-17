import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ClsCartItem } from '../../Models/cls-cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.html',
  styleUrl: './shop-cart.scss',
})
export class ShopCart implements OnInit {
  serveralCartItem !: ClsCartItem[];

  constructor(private cartService: CartService, private cartItemChangeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCart().subscribe(cartItems => {
      this.serveralCartItem = cartItems;
      this.cartItemChangeDetector.detectChanges();
    })
  }

  removeFromCart(cartItemId: string): void {
    this.cartService.removeFromCart(cartItemId).subscribe(() => {
      this.loadCart();
    }
    );
  }

  clearCart(): void {      
    this.cartService.clearCart().subscribe(() => {
      this.loadCart();
    });
  }
}
