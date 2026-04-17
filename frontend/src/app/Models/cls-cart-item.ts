import { ClsProduct } from "./cls-product-card";

export class ClsCartItem {
    _id !: string;
    product_id !: ClsProduct;
    quantity !: number;

    constructor(_id: string, product: ClsProduct, quantity: number) {
        this._id = _id;
        this.product_id = product;
        this.quantity = quantity;
    }
}