import { Component } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent {
  electronic: any;
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAllElectronics().subscribe((res) =>{
      this.electronic = res;
    })
  }
}
