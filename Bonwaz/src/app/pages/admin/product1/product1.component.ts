import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
//import { ProductService } from '../products/services/product/product.service';
import { Product3Service } from '../../../Services1/product2/product3.service';

@Component({
  selector: 'app-product1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product1.component.html',
  styleUrl: './product1.component.css'
})
export class Product1Component implements OnInit {
  isSiderPanelVisible: boolean = false;
  product1Obj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date,
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
  };
  categoryList: any[] = [];

  constructor(private productSrv: Product3Service) {

  }
  ngOnInit(): void {
    this.getAllCategory();

  }
  getAllCategory() {
    this.productSrv.getAllProducts().subscribe((res: any) => {
      this.categoryList = res.data;

    })
  }




  productsList: any[] = [];
  filteredProductsList: any[] = [];


  displayModalProduct: boolean = false;

  isApiCallInProgress: boolean = false;
  openSidePanel() {
    this.isSiderPanelVisible = true;
  }
  closeSidePanel() {
    this.isSiderPanelVisible = false;
  }

}
