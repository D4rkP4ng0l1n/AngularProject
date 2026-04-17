import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClsCartItem } from "../Models/cls-cart-item";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private apiUrl = 'http://localhost:3000/cart';
    private postUrl = this.apiUrl + '/add';

    constructor(private http: HttpClient) { }

    getCart(): Observable<ClsCartItem[]> {
        return this.http.get<ClsCartItem[]>(this.apiUrl);
    }

    addToCart(product_id: string, quantity: number): Observable<any> {
        return this.http.post(this.postUrl, {
            product_id,
            quantity
        });
    }
}