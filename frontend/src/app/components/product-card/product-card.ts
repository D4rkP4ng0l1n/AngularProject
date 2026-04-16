import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard implements OnInit {
  name!: string;
  image!: string;

  ngOnInit(): void {
    this.name = "Freddy Fazbear";
    this.image = "/img/Freddy.webp";
  }

  addToCart() {
    console.log(this.name + ' ajouté au panier');
  }
}
