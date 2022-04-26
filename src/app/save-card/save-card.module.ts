import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SaveCardRoutingModule } from './save-card-routing.module';
import { SaveCardComponent } from './components/card/save-card.component';
import { CardService } from './services/card.service';
import { NumberMaskPipe } from './pipes/number-mask.pipe';
import { ValidityPipe } from './pipes/validity.pipe';



@NgModule({
  declarations: [
    SaveCardComponent,
    NumberMaskPipe,
    ValidityPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SaveCardRoutingModule,
  ],
  exports: [
    SaveCardComponent,
    ValidityPipe,
    NumberMaskPipe
  ],
  providers: [
    CardService,
  ]
})
export class SaveCardModule { }
