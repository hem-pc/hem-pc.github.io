import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveCardRoutingModule } from './save-card-routing.module';
import { SaveCardComponent } from './save-card.component';


@NgModule({
  declarations: [
    SaveCardComponent
  ],
  imports: [
    CommonModule,
    SaveCardRoutingModule
  ]
})
export class SaveCardModule { }
