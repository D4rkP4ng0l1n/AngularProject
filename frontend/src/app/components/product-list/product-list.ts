import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ClsProduct } from '../../Models/cls-product-card';
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
  
  private destroy$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private productChangeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadProducts(): void {
    this.productService.getProduct().subscribe(products => {
      this.severalProduct = products;
      console.log(this.severalProduct);
      this.productChangeDetector.detectChanges();
    });
  }
}
