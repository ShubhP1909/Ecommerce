import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {
 
  clothes: any;
  constructor(private service: ProductService) {}

 ngOnInit(): void {
   this.service.getAllClothes().subscribe((res) =>{
     this.clothes = res;
   })
 }
}
