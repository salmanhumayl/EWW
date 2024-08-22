import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsconditionsRoutingModule } from './termsconditions-routing.module';
import { TermsconditionsComponent } from './termsconditions.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [TermsconditionsComponent],
  imports: [
    CommonModule,
    TermsconditionsRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class TermsconditionsModule { }
