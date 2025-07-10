import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { ProductDetailesComponent } from './components/product-detailes/product-detailes.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { CartComponent } from './components/cart/cart.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

export const routes: Routes = [
  {path:'' , redirectTo:"home",pathMatch:'full' , title:'home' },
  {path:'home' , component:HomeComponent , title:'home' , canActivate:[authGuard]},
  {path:'register' , component:RegisterComponent , title:'register' },
  {path:'login' , component:LoginComponent , title:'login' },
  {path:'forgetPassword' , component:ForgetPasswordComponent , title:'forgot password' },
  {path:"detailes/:title/:id" , component:ProductDetailesComponent , title:"deatiles", canActivate:[authGuard]},
  {path:"cart" , component:CartComponent , title:"carts", canActivate:[authGuard]},
  // {path:"wishlist" , component:WishlistComponent , title:"wishlist", canActivate:[authGuard]},
  {path:"allorders/:id" , component:AllordersComponent , title:"allorders", canActivate:[authGuard]},
  {path:"allorders/:id" , component:AllordersComponent , title:"allorders", canActivate:[authGuard]},
  {path:"allproducts" , component:AllProductsComponent , title:"allproducts", canActivate:[authGuard]},

  {path:'**' , component:NotfoundComponent , title:'not found', canActivate:[authGuard]}, // NOT Found
];
