import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { ProductList } from './Components/product-list/product-list';

export const routes: Routes = [
    { path: 'Accueil', component: Home },
    { path: 'Produits', component: ProductList },
    { path: '', redirectTo: 'Accueil', pathMatch: 'prefix' }
];
