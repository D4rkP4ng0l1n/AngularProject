export class ClsProduct {
    id !: string;
    name !: string;
    image !: string;

    constructor(id: string, name: string, image: string) {
        this.id = id;
        this.name = name;
        this.image = image;
    }

    addToCart(): void {
        console.log(this.name + ' ajouté au panier');
    }
}