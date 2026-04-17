import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClsProduct } from "../Models/cls-product-card";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private apiUrl = 'http://localhost:3000/products';

    constructor(private http: HttpClient) { }

    getProduct(): Observable<ClsProduct[]> {
        return this.http.get<ClsProduct[]>(this.apiUrl);
    }
}