import { Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Angular Gallery | Home',
  },
  {
    path: 'gallery',
    title: 'Angular Gallery | Gallery',
    children: [
      { path: '', component: GalleryComponent },
      { path: ':season', title: 'Angular Gallery | Gallery', component: GalleryComponent },
    ],
  },
  {
    path: 'shopping-cart',
    title: 'Angular Gallery | Shopping Cart',
    component: ShoppingCartComponent,
  },
];
