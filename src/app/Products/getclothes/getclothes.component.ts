import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-getclothes',
  templateUrl: './getclothes.component.html',
  styleUrls: ['./getclothes.component.scss']
})
export class GetclothesComponent implements OnInit{
   id: any;
   data: any;
   constructor(private route: ActivatedRoute, private service: ProductService){}

   ngOnInit(): void {
     this.id = this.route.snapshot.paramMap.get("id")

     this.service.getClothes(this.id).subscribe((res)=> {
      this.data = res;
     })
   }

}
