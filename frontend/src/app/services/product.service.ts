import { Injectable } from "@angular/core";
import { ClsProduct } from "../Models/cls-product-card";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private products : ClsProduct[] = [
        new ClsProduct("Freddy Fazbear", "/img/Freddy.webp"),
        new ClsProduct("Bonnie", "/img/Bonnie.webp"),
        new ClsProduct("Chica", "/img/Chica.webp"),
        new ClsProduct("Foxy", "/img/Foxy.webp")
    ];

    getProduct(): ClsProduct[] {
        return [...this.products];
    }
}