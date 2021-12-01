import { Component, Input, OnInit } from '@angular/core';

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { EventDetail, Session } from '../../interfaces/interfaces';

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
  @Input() eventToShow!: EventDetail;

  constructor() { }

  ngOnInit(): void {
    
  }

}
