import { Component, Input, OnInit } from '@angular/core';

import { Event } from '../../interfaces/interfaces';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  /* PROPIEDADES */
  @Input() eventToShow!: Event; 

  constructor() { }

  ngOnInit(): void {
    
  }

}
