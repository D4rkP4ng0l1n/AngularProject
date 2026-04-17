import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ClsCartItem } from "../Models/cls-cart-item";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private apiUrl = 'http://localhost:3000/cart';
    private postUrl = this.apiUrl + '/add';
    
    // Subject pour notifier les changements du panier
    private cartChangedSubject = new Subject<void>();
    public cartChanged$ = this.cartChangedSubject.asObservable();

    constructor(private http: HttpClient) { }

    getCart(): Observable<ClsCartItem[]> {
        return this.http.get<ClsCartItem[]>(this.apiUrl);
    }

    addToCart(product_id: string, quantity: number): Observable<any> {
        return new Observable(observer => {
            this.http.post(this.postUrl, {
                product_id,
                quantity
            }).subscribe({
                next: (res) => {
                    this.cartChangedSubject.next();
                    observer.next(res);
                    observer.complete();
                },
                error: (err) => {
                    observer.error(err);
                }
            });
        });
    }

    removeFromCart(cartItemId: string): Observable<any> {
        return new Observable(observer => {
            this.http.delete(this.apiUrl + '/' + cartItemId).subscribe({
                next: (res) => {
                    this.cartChangedSubject.next();
                    observer.next(res);
                    observer.complete();
                },
                error: (err) => {
                    observer.error(err);
                }
            });
        });
    }

    clearCart(): Observable<any> {
        return new Observable(observer => {
            this.http.delete(this.apiUrl).subscribe({
                next: (res) => {
                    this.cartChangedSubject.next();
                    observer.next(res);
                    observer.complete();
                },
                error: (err) => {
                    observer.error(err);
                }
            });
        });
    }
}