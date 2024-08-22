import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionsRoutingModule } from './solutions-routing.module';
import { SolutionsComponent } from './solutions.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [SolutionsComponent],
  imports: [
    CommonModule,
    SolutionsRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class SolutionsModule { }
