import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';

import { BillboardComponent } from './pages/billboard/billboard.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';




@NgModule({
  declarations: [
    BillboardComponent,
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
