  
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';
import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Colorado Women on the Fly';

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.loadBasket();
  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if(basketId) {
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log("initialized basket");
      }, error => {
        console.log(error);
      });
    }
  }
}
