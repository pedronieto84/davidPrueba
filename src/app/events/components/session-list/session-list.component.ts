import { Component, Input, OnInit } from '@angular/core';

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Session } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  /* Icons */
  faPlus = faPlus;
  faMinus = faMinus;

  /* Properties */
  @Input() sessionsToShow!: Session[];
  @Input() eventId!: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    
  }

  increment(session: Session) {
    console.log(session, this.eventId);
    
    session.eventId = this.eventId;
    if(session.totalAmount >= parseInt(session.availability)){
        console.log('NO HAY TANTAS ENTRADAS DISPONIBLES')
    }else{  
        
        this.data.updateCart(session, 'increase')
    }
    
  }

   decrement(session: Session) {
    console.log(session, this.eventId);
    session.eventId = this.eventId;
       if(session.totalAmount <=  0){
        console.log('NO TIENE SENTIDO METER NEGATIVOS')
    }else{  
        this.data.updateCart(session, 'decrease')
    }
    
  }

}
