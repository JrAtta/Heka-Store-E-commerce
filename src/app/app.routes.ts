import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    title: 'home'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent),
    title: 'home',
    canActivate: [authGuard]
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/register/register.component').then(m => m.RegisterComponent),
    title: 'register'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent),
    title: 'login'
  },
  {
    path: 'forgetPassword',
    loadComponent: () =>
      import('./components/forget-password/forget-password.component').then(m => m.ForgetPasswordComponent),
    title: 'forgot password'
  },
  {
    path: 'detailes/:title/:id',
    loadComponent: () =>
      import('./components/product-detailes/product-detailes.component').then(m => m.ProductDetailesComponent),
    title: 'details',
    canActivate: [authGuard]
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./components/cart/cart.component').then(m => m.CartComponent),
    title: 'cart',
    canActivate: [authGuard]
  },
  {
    path: 'allorders/:id',
    loadComponent: () =>
      import('./components/allorders/allorders.component').then(m => m.AllordersComponent),
    title: 'allorders',
    canActivate: [authGuard]
  },
  {
    path: 'allproducts',
    loadComponent: () =>
      import('./components/all-products/all-products.component').then(m => m.AllProductsComponent),
    title: 'allproducts',
    canActivate: [authGuard]
  },
  {
    path: 'products/:category',
    loadComponent: () =>
      import('./components/products-by-category/products-by-category.component').then(m => m.ProductsByCategoryComponent),
    title: 'products by category',
    canActivate: [authGuard]
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/notfound/notfound.component').then(m => m.NotfoundComponent),
    title: 'not found',
    canActivate: [authGuard]
  }
];
