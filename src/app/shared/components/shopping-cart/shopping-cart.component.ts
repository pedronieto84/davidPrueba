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
    this.data.cart$.subscribe( async  (cartUpdate)=>{
         const eventidsArray = await cartUpdate.map((item: Session)=>{
            return item.eventId
        });
        console.log('event is', eventidsArray);
       
       console.log('i', this.cartArray);
       const setOfEvents =  [...new Set(eventidsArray)];

        console.log('set of events', setOfEvents);

        setOfEvents.forEach((eventId: any, index)=>{
                   const elementsOfThisEvent = cartUpdate.filter((item:Session)=>{
                 return item.eventId === eventId
           })

           // 
           const title = 'hola';

           
          

           ///
           this.cartArray[index] = {  title, elements: elementsOfThisEvent }    
        })

        console.log('FINAL DATA', this.cartArray);
        
       
       
         //       setOfEvents.forEach((eventId:any)=>{

  //         const elementsOfThisEvent = cartUpdate.filter((item:Session)=>{
  //               return item.eventId === eventId
  //         })


      
  //       this.cartArray[eventId] = elementsOfThisEvent
      
    })
  //     console.log('on init de shoping cart comp')
  //     this.data.cart$.subscribe((cartUpdate: Session[]): void=>{
  //        console.log('subscribe de data cart')
  //       console.log('cartUpdate', cartUpdate)
  //      // this.cartArray = cartUPdate;


  //       // necesito saber cuantos evnet ids tengo;

  //       const eventidsArray = cartUpdate.map((item: Session)=>{
  //           return item.eventId
  //       });

  //       const setOfEvents =  [...new Set(eventidsArray)];

  //       console.log('set of events', setOfEvents);


  //       // necesito crear un array con el indice de ese id 
  //       setOfEvents.forEach((eventId:any)=>{

  //         const elementsOfThisEvent = cartUpdate.filter((item:Session)=>{
  //               return item.eventId === eventId
  //         })


      
  //       this.cartArray[eventId] = elementsOfThisEvent
  //         console.log('this.cartarray', this.cartArray)
  //       // dentro de cada array introducir el subarray


  //     })

  // })




}

  deleteItem(item:Session){
    this.data.updateCart(item, 'decrement')
  }

}
