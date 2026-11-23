
import { Component, signal } from '@angular/core';

interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  protected readonly title = signal('ElectroShop');

  storeName: string = "ElectroShop";
  storeDescription: string = "Your favorite electronics store";
  storeAddress: string = "Amman, Jordan";
  totalProducts: number = 12;
  isStoreOpen: boolean = true;
  currency: string = "USD";

  productNames: string[] = [
    "Laptop",
    "Smartphone",
    "Headphones",
    "Smart Watch",
    "Keyboard"
  ];

  productPrices: number[] = [750, 450, 80, 120, 45];

  featuredProduct: Product[] = [
    {
      name: "Laptop",
      price: 750,
      description: "High-performance laptop"
    }
  ];

  showItems: boolean = false;
  storeStatus: string = "";
  discountPercentage: number = 10;
  finalPrice: number = 0;
  Totalnumproducts = this.productPrices.length;
  Mostexpensiveproductprice = this.productPrices[0];
  Cheapestproductprice = this.productPrices[0];
  Totalvalueofallproductprices = 0;
  constructor() {
      if (this.isStoreOpen == true) {
         this.storeStatus = "We Are Open";
       }
      else {
         this.storeStatus = "We Are Closed";
       }

      if (this.discountPercentage > 0) {
         this.finalPrice = this.featuredProduct[0].price -(this.featuredProduct[0].price * this.discountPercentage / 100);
       }
       else {
         this.finalPrice = this.featuredProduct[0].price;
       }
       for (let i = 0; i < this.productPrices.length; i++) {
        this.Totalvalueofallproductprices += this.productPrices[i];

 
        if (this.productPrices[i] > this.Mostexpensiveproductprice) {
           this.Mostexpensiveproductprice = this.productPrices[i];
        }


        if (this.productPrices[i] < this.Cheapestproductprice) {
          this.Cheapestproductprice = this.productPrices[i];
        }
      }
   
  }

  display() {
    this.showItems = true;
  }
 



}




