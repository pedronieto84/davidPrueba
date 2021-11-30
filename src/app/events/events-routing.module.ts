import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillboardComponent } from './pages/billboard/billboard.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'billboard',
        component: BillboardComponent
      },
      {
        path: 'detail/:id',
        component: EventDetailComponent
      },
      {
        path: '**',
        redirectTo: 'billboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EventsRoutingModule { }
