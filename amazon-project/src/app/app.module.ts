import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { NumbersOnlyDirective } from './navbar/navbar.directive';
// import { NumbersOnlyDirective } from './navbar/navbar-numbers-only.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProductListingComponent
  ],
  bootstrap:[
    AppComponent
  ],
  // exports:[NumbersOnlyDirective]
})
export class AppModule { }
