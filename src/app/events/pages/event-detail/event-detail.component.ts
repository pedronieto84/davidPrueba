import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

import { DataService } from '../../services/data.service';
import { EventDetail, Session } from '../../interfaces/interfaces';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  /* PROPERTIES */
  eventToShow!: EventDetail;
  sessionsToShow!: Session[];
  id!: string;


  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Obtenemos el id
    this.getId();
    //Obtenemos el array de sesiones correspondiente
    this.getSessions(this.id);
  }

  /* Methods */
  //Obtiene la id
  getId() {
    this.activatedRoute.params
      .subscribe( params => this.id = params['id'] )
  }

  //Obtiene el array de sesiones desde el servicio
  getSessions(id: string) {
    this.dataService.getEventInfo(id).pipe(
      //Order by end date, ASC
        map( (event => {
          //Asigno el evento que me devuelve
          this.eventToShow = event;
          //Devuelvo las sesiones
          return event.sessions.sort( (a, b) => parseInt(a.date) - parseInt(b.date) )
        } ) )
      )
      .subscribe( sessions => this.sessionsToShow = sessions);
  }

}
