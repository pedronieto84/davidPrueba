import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Event, EventDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  eventsPath: string = '../../../assets/data/events.json';
  arrayCart:any[]= []

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
  //GET: devuelve array de objetos Event
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsPath);
  }

  //GET: devuelve objeto event detail correspondiente al ID
  getEventInfo(id: string): Observable<EventDetail> {
    return this.http.get<EventDetail>(`../../../assets/data/event-info-${id}.json`);
  }

}
