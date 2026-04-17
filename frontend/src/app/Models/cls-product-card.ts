export class ClsProduct {
    _id !: string;
    name !: string;
    image !: string;

    constructor(_id: string, name: string, image: string) {
        this._id = _id;
        this.name = name;
        this.image = image;
    }

    addToCart(): void {
        console.log(this.name + ' ajouté au panier');
    }
}