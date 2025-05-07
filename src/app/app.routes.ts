import { Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home | Angular Gallery',
    data: {
      meta: { description: 'Best seasonal images for all uses' },
    },
  },
  {
    path: 'gallery',
    title: 'Photo Gallery | Angular Gallery',
    children: [
      { path: '', component: GalleryComponent },
      { path: ':season', component: GalleryComponent },
    ],
  },
  {
    path: 'shopping-cart',
    title: 'Shopping Cart | Angular Gallery',
    component: ShoppingCartComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About | Angular Gallery',
  },
];
