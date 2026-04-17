import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ClsProduct } from '../../Models/cls-product-card';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit, OnDestroy {
  severalProduct !: ClsProduct[];
  goldenFreddyUnlocked: boolean = false;
  
  private destroy$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private productChangeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    
    // Écouter les changements du panier
    this.cartService.cartChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.checkGoldenFreddyCondition();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadProducts(): void {
    this.productService.getProduct().subscribe(products => {
      this.severalProduct = products;
      this.checkGoldenFreddyCondition();
      console.log(this.severalProduct);
      this.productChangeDetector.detectChanges();
    });
  }

  checkGoldenFreddyCondition(): void {
    this.cartService.getCart().subscribe(cartItems => {
      const cartMap = this.createCartMap(cartItems);
      
      const hasFreddyCondition = 
        cartMap['Freddy Fazbear'] === 1 &&
        cartMap['Bonnie'] === 9 &&
        cartMap['Chica'] === 8 &&
        cartMap['Foxy'] === 7;

      console.log('Cart Map:', cartMap);
      console.log('Golden Freddy condition:', hasFreddyCondition);
      
      this.goldenFreddyUnlocked = hasFreddyCondition;
      
      if (hasFreddyCondition && !this.isGoldenFreddyInList()) {
        this.addGoldenFreddy();
      } else if (!hasFreddyCondition && this.isGoldenFreddyInList()) {
        this.removeGoldenFreddy();
      }
      
      this.productChangeDetector.detectChanges();
    });
  }

  private createCartMap(cartItems: any[]): { [key: string]: number } {
    const map: { [key: string]: number } = {};
    cartItems.forEach(item => {
      map[item.product_id.name] = item.quantity;
    });
    return map;
  }

  isGoldenFreddyInList(): boolean {
    return this.severalProduct?.some(p => p._id === '1987') ?? false;
  }

  getGoldenFreddy(): ClsProduct | undefined {
    return this.severalProduct?.find(p => p._id === '1987');
  }

  getNormalProducts(): ClsProduct[] {
    return this.severalProduct?.filter(p => p._id !== '1987') ?? [];
  }

  private addGoldenFreddy(): void {
    if (this.severalProduct && !this.isGoldenFreddyInList()) {
      const goldenFreddy = new ClsProduct('1987', 'Golden Freddy', '/img/GoldenFreddy.webp');
      this.severalProduct = [goldenFreddy, ...this.severalProduct];
      this.productChangeDetector.detectChanges();
    }
  }

  private removeGoldenFreddy(): void {
    if (this.severalProduct) {
      this.severalProduct = this.severalProduct.filter(p => p._id !== '1987');
      this.productChangeDetector.detectChanges();
    }
  }
}
