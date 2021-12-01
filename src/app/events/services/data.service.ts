import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Event, EventDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  eventsPath: string = '../../../assets/data/events.json';

  constructor(
    private http: HttpClient 
  ) { }

  //GET: devuelve array de objetos Event
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsPath);
  }

  //GET: devuelve objeto event detail correspondiente al ID
  getEventInfo(id: number): Observable<EventDetail> {
    return this.http.get<EventDetail>(`../../../assets/data/event-info-${id}.json`);
  }

}
