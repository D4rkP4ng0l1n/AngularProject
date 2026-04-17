import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { ProductList } from './Components/product-list/product-list';
import { ShopCart } from './Components/shop-cart/shop-cart';

export const routes: Routes = [
    { path: 'Accueil', component: Home },
    { path: 'Produits', component: ProductList },
    { path: 'Panier', component: ShopCart },
    { path: '', redirectTo: 'Accueil', pathMatch: 'prefix' }
];
