import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturersRoutingModule } from './manufacturers-routing.module';
import { ManufacturersComponent } from './manufacturers.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [ManufacturersComponent],
  imports: [
    CommonModule,
    ManufacturersRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class ManufacturersModule { }
