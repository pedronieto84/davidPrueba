import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { BillboardComponent } from './pages/billboard/billboard.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    BillboardComponent,
    EventDetailComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule
  ]
})
export class EventsModule { }
