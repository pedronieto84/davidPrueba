import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BillboardComponent } from './pages/billboard/billboard.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';



@NgModule({
  declarations: [
    BillboardComponent,
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    NgbModule
  ]
})
export class EventsModule { }
