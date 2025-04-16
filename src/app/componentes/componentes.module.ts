import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CardComponent
  ]
})
export class ComponentesModule { }
