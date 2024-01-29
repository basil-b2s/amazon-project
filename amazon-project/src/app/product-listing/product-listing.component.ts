import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent implements OnInit{
  public productData : any = [];
  public selectedProduct : any = [];
  public selectedProdIndex : number | null = null;
  ngOnInit(): void {
    this.productData = [
      {
        "prodName": "iPhone 13",
        "price": 1099.99,
        "rating": 4.5,
        "imgLink": "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/8/z/w/iphone-13-mlph3hn-a-apple-original-imag6vzzhrxgazsg.jpeg?q=70",
        "description": "The latest iPhone with advanced camera features and A15 Bionic chip."
      },
      {
        "prodName": "Samsung Galaxy S21",
        "price": 999.99,
        "rating": 4.3,
        "imgLink": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/s/l/-original-imagtnqjjuc6dh6v.jpeg?q=70",
        "description": "Powerful Android phone with a high-refresh-rate display and versatile camera system."
      },
      {
        "prodName": "Google Pixel 6",
        "price": 799.99,
        "rating": 4.7,
        "imgLink": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70",
        "description": "Flagship Pixel phone known for its exceptional camera performance and clean Android experience."
      },
      {
        "prodName": "OnePlus 9 Pro",
        "price": 899.99,
        "rating": 4.6,
        "imgLink": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/i/g/-original-imaggcee7yprwrhx.jpeg?q=70",
        "description": "Premium OnePlus device with a smooth 120Hz display and Hasselblad-tuned camera system."
      },
      {
        "prodName": "Xiaomi Mi 11",
        "price": 749.99,
        "rating": 4.4,
        "imgLink": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/h/z/-original-imagbh7rzbvfgqex.jpeg?q=70",
        "description": "High-performance smartphone featuring a Snapdragon 888 processor and impressive AMOLED display."
      },
      {
        "prodName": "Sony Xperia 1 III",
        "price": 1099.99,
        "rating": 4.2,
        "imgLink": "https://rukminim2.flixcart.com/image/312/312/j8ndea80/mobile/p/x/q/sony-xperia-xa1-plus-g3416-original-imaeym7pgxzqfrjg.jpeg?q=70",
        "description": "Sony's flagship phone with a 4K HDR OLED display and advanced camera technology."
      },
      {
        "prodName": "Apple iPhone SE (2022)",
        "price": 429.99,
        "rating": 4.0,
        "imgLink": "",
        "description": "Compact iPhone with the powerful A15 Bionic chip and an affordable price point."
      },
      {
        "prodName": "Samsung Galaxy A52",
        "price": 499.99,
        "rating": 4.1,
        "imgLink": "",
        "description": "Mid-range Samsung phone with a versatile camera setup and long-lasting battery life."
      },
      {
        "prodName": "Google Pixel 5a",
        "price": 449.99,
        "rating": 4.5,
        "imgLink": "",
        "description": "Pixel phone known for its excellent camera quality, 5G connectivity, and affordability."
      },
      {
        "prodName": "OnePlus Nord 2",
        "price": 549.99,
        "rating": 4.4,
        "imgLink": "",
        "description": "Mid-range OnePlus phone with a MediaTek Dimensity 1200 AI processor and impressive display."
      },
      {
        "prodName": "Xiaomi Redmi Note 10",
        "price": 279.99,
        "rating": 4.3,
        "imgLink": "",
        "description": "Budget-friendly phone with a high-refresh-rate display and a capable camera system."
      },
      {
        "prodName": "Sony Xperia 5 III",
        "price": 999.99,
        "rating": 4.2,
        "imgLink": "",
        "description": "Compact Xperia phone with a 120Hz OLED display and advanced photography features."
      },
      {
        "prodName": "Apple iPhone 12 Mini",
        "price": 699.99,
        "rating": 4.6,
        "imgLink": "",
        "description": "Compact iPhone with 5G capability, A14 Bionic chip, and a dual-camera system."
      },
      {
        "prodName": "Samsung Galaxy Z Fold 3",
        "price": 1799.99,
        "rating": 4.8,
        "imgLink" : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/2/r/galaxy-fold5-sm-f946blbhins-samsung-original-imagru5ugghfnwnj.jpeg?q=70',
        "description": "Foldable smartphone with a large AMOLED display and S Pen support."
      },
      {
        "prodName": "Google Pixel 6 Pro",
        "price": 1099.99,
        "rating": 4.7,
        'imgLink':'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/u/m/-original-imaggsuehy3nyj3b.jpeg?q=70',
        "description": "Premium Pixel phone with an advanced camera system, 120Hz display, and powerful performance."
      }
    ]
    
  }
  public showProduct(index : number) : void{
      this.selectedProdIndex = index
  }
  //  public showDetails(product : string) : any{
  //   console.log("count")
  //   console.log(product);
  //   return
  //  }
}
