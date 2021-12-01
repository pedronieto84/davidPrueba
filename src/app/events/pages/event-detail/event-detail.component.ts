import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { DataService } from '../../services/data.service';
import { EventDetail } from '../../interfaces/interfaces';
;

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  /* PROPERTIES */
  eventToShow!: EventDetail;
  id!: string;


  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Obtenemos el id
    this.getId();
    //Obtenemos el evento correspondiente
    this.getEventInfo(this.id);
  }

  /* Methods */
  //Obtiene la id
  getId() {
    this.activatedRoute.params
      .subscribe( params => this.id = params['id'] )
  }

  //Obtiene el evento desde el servicio
  getEventInfo(id: string) {
    this.dataService.getEventInfo(id)
      .subscribe( event => this.eventToShow = event);
  }

}
