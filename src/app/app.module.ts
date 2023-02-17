import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ClothesComponent } from './Products/clothes/clothes.component';
import { ElectronicsComponent } from './Products/electronics/electronics.component';
import { GetclothesComponent } from './Products/getclothes/getclothes.component';
import { GetelectronicsComponent } from './Products/getelectronics/getelectronics.component';
import { CartComponent } from './Products/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    ElectronicsComponent,
    ClothesComponent,
    GetclothesComponent,
    GetelectronicsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
