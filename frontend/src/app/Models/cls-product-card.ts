export class ClsProduct {
    name !: string;
    image !: string;

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
    }

    addToCart(): void {
        console.log(this.name + ' ajouté au panier');
    }
}