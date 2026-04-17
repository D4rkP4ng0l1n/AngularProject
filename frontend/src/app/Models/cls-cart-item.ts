import { ClsProduct } from "./cls-product-card";

export class ClsCartItem {
    _id !: string;
    product !: ClsProduct;
    quantity !: number;

    constructor(_id: string, product: ClsProduct, quantity: number) {
        this._id = _id;
        this.product = product;
        this.quantity = quantity;
    }
}