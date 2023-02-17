import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public cartItemlist : any = []
  public listProducts = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) { }

  getAllClothes(){
   return this.http.get("http://localhost:3000/clothes")
  }

  getClothes(id:any){
    return this.http.get("http://localhost:3000/clothes/" +id)
   }

  getAllElectronics(){
   return  this.http.get("http://localhost:3000/Electronics")
  }

  getElectronics(id:any){
    return  this.http.get("http://localhost:3000/Electronics/" +id)
   }

  getcartItem(){
    return this.listProducts.asObservable();
  }

  addtoCart(product: any){
   this.cartItemlist.push(product)
   this.listProducts.next(product)
   this.getTotalPrice();
  }

  getTotalPrice(){
    let total = 0;
    this.cartItemlist.map((a:any) => {
      total += a.total;  
    })
  }

  removeCartItem(product: any){
    
  }

}
