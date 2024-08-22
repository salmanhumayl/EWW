import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealersRoutingModule } from './dealers-routing.module';
import { DealersComponent } from './dealers.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [DealersComponent],
  imports: [
    CommonModule,
    DealersRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class DealersModule { }
