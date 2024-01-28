import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListingComponent } from './product-listing/product-listing.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProductListingComponent
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
