import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StripComponent } from './components/strip/strip.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './routes/categories/categories.component';
import { DealsComponent } from './routes/deals/deals.component';
import { WhatsnewComponent } from './routes/whatsnew/whatsnew.component';
import { DeliveryComponent } from './routes/delivery/delivery.component';
import { AccountComponent } from './routes/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StripComponent,
    NavbarComponent,
    ProductsComponent,
    CategoriesComponent,
    DealsComponent,
    WhatsnewComponent,
    DeliveryComponent,
    AccountComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
