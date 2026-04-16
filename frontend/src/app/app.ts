import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductCard } from './Components/product-card/product-card';
import { ClsProduct } from './Models/cls-product-card';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  severalProduct !: ClsProduct[];

  constructor(private productService: ProductService, private productChangeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(products => {
      this.severalProduct = products;
      console.log(this.severalProduct);
      this.productChangeDetector.detectChanges();
    });
  }
}
