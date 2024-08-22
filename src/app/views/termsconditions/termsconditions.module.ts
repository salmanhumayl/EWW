import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsconditionsRoutingModule } from './termsconditions-routing.module';
import { TermsconditionsComponent } from './termsconditions.component';


@NgModule({
  declarations: [TermsconditionsComponent],
  imports: [
    CommonModule,
    TermsconditionsRoutingModule
  ]
})
export class TermsconditionsModule { }
