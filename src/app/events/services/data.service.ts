import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Session } from '../interfaces/interfaces';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Event, EventDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  eventsPath: string = '../../../assets/data/events.json';
  arrayCart:Session[]= []

  private cart = new BehaviorSubject<any>({});
  public cart$ = this.cart.asObservable()

  constructor(
    private http: HttpClient 
  ) { }

  checkIf2SessionsAreEqual(sessionA:Session, sessionB:Session){
     if( (sessionA.eventId === sessionB.eventId ) && (sessionA.date === sessionB.date ) ){
              return true
            }else {
              return false
            }
  }

  updateCart(cartUpdate:any, action: string){
    
    console.log('updatecart', cartUpdate, action);
    
    // miramos si el elemento ya esta dentro del array o no

    const isInsideArray = this.arrayCart.some((item:Session)=>{
      return this.checkIf2SessionsAreEqual(cartUpdate, item)
    })
    console.log(isInsideArray);
    

    // si ya existe el elemento, cojo el total amount y le sumo 1
    if(isInsideArray){
        // tenemos que encontrar la posicion de ese elemento en el cart Array;
        const index = this.arrayCart.findIndex((item:Session)=>{
             return this.checkIf2SessionsAreEqual(cartUpdate, item)
        })
        if(action === 'increase'){
          this.arrayCart[index].totalAmount +=1
        }else{
          if(this.arrayCart[index].totalAmount === 0){
            this.arrayCart.splice(index, 1)
          }else{
            this.arrayCart[index].totalAmount -= 1
          }
          
          
        }
         
       
        this.cart.next(this.arrayCart)
         console.log('final Update', this.arrayCart)
        
    }else{
    cartUpdate.totalAmount = 1
    this.arrayCart.push(cartUpdate)
    this.cart.next(this.arrayCart);
    
    
    }

    // si el elemento no existe, lo a??ado al array

  
  }

  deleteItemFromCart(item:Session){

    // quitar del arrayCart, este elemento, y una vez tengo el array sin ese elemento

    // encontrar el indice del elemento que tengo que eliminar
    const indexOfItemToDelete = this.arrayCart.findIndex((itemOfArray: Session)=>{
            return this.checkIf2SessionsAreEqual(itemOfArray, item)
    })

    this.arrayCart.splice(indexOfItemToDelete, 1);
    this.cart.next( [ ... this.arrayCart ] )


  }
  //GET: devuelve array de objetos Event
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsPath);
  }

  //GET: devuelve objeto event detail correspondiente al ID
  getEventInfo(id: string): Observable<EventDetail> {
    return this.http.get<EventDetail>(`../../../assets/data/event-info-${id}.json`);
  }

 async getTitleFromid(id: string) {
    const allData = await this.http.get<Event[]>(`../../../assets/data/events.json`).toPromise()
    console.log('all data', allData);
    const getMyItem = allData.find((event)=>{
          return event.id === id
    }) as Event
    
    return getMyItem.title
  }

}
