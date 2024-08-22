import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeasingRoutingModule } from './leasing-routing.module';
import { LeasingComponent } from './leasing.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [LeasingComponent],
  imports: [
    CommonModule,
    LeasingRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class LeasingModule { }
