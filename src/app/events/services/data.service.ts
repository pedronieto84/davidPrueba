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

  updateCart(cartUpdate:any){
    this.arrayCart.push(cartUpdate)
    // 
    this.cart.next(this.arrayCart)
  }

  deleteItemFromCart(item:Session){

    // quitar del arrayCart, este elemento, y una vez tengo el array sin ese elemento

    // encontrar el indice del elemento que tengo que eliminar
    const indexOfItemToDelete = this.arrayCart.findIndex((itemOfArray: Session)=>{
            if( (itemOfArray.eventId === item.eventId ) && (itemOfArray.date === item.date ) ){
              return true
            }else {
              return false
            }
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

}
