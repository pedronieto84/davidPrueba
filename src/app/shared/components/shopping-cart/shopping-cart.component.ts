import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/events/interfaces/interfaces';
import { DataService } from 'src/app/events/services/data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartArray:any[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {

      this.data.cart$.subscribe((cartUPdate)=>{
        console.log('cartUpdate', cartUPdate)
        this.cartArray = cartUPdate
      })

  }

  deleteItem(item:Session){
    this.data.deleteItemFromCart(item)
  }

}
