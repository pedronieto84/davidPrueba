import { Component, OnInit } from '@angular/core';

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
  getEvents() {
    this.dataService.getEvents()
      .subscribe( events => {
        this.events = events
        console.log(this.events)
      } );
  }

}
