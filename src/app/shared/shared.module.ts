import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    ShoppingCartComponent
  ]
})
export class SharedModule { }
