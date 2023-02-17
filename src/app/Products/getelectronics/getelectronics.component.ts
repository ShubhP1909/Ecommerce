import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-getelectronics',
  templateUrl: './getelectronics.component.html',
  styleUrls: ['./getelectronics.component.scss']
})
export class GetelectronicsComponent {

  id: any;
  data: any;
  constructor(private route: ActivatedRoute, private service: ProductService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    this.service.getElectronics(this.id).subscribe((res)=> {
      this.data = res;
    })
   }
}
