import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Event } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

  /* PROPIEDADES */
  events!: Event[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  /* MÉTODOS */
  //Llama a getEvents de dataService y obtiene array de objetos Event
  getEvents() {
    this.dataService.getEvents().pipe(
      //Order by end date, ASC
        map( (events => events.sort( (a, b) => parseInt(a.endDate) - parseInt(b.endDate) )) )
      ) 
      .subscribe( events => {
        this.events = events
        // console.log(this.events)
      } );
  }
}
