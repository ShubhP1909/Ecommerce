import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesComponent } from './Products/clothes/clothes.component';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './Products/electronics/electronics.component';
import { GetclothesComponent } from './Products/getclothes/getclothes.component';
import { GetelectronicsComponent } from './Products/getelectronics/getelectronics.component';
import { CartComponent } from './Products/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clothes',
    component: ClothesComponent
  },
  {
    path: 'clothes/:id',
    component: GetclothesComponent
  },
  {
    path: 'electronics',
    component: ElectronicsComponent
  },
  {
    path: 'electronics/:id',
    component: GetelectronicsComponent
  },
  {
    path: 'Cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
