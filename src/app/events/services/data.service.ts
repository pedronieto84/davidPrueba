import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Event } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  eventsPath: string = '../../../assets/data/events.json'

  constructor(
    private http: HttpClient 
  ) { }

  //GET: devuelve array de objetos Event
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsPath);
  }
}
