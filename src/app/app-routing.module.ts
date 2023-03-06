import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './routes/account/account.component';
import { CartComponent } from './routes/cart/cart.component';
import { CategoriesComponent } from './routes/categories/categories.component';
import { DealsComponent } from './routes/deals/deals.component';
import { DeliveryComponent } from './routes/delivery/delivery.component';
import { WhatsnewComponent } from './routes/whatsnew/whatsnew.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent},
  { path: 'deals', component: DealsComponent},
  { path: 'whatsnew', component: WhatsnewComponent},
  { path: 'delivery', component: DeliveryComponent},
  { path: 'cart', component: CartComponent},
  { path: 'home', component: HomeComponent},
  { path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
