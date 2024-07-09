import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { TestComponent } from './test/test.component';
//import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
   
  ]
})
export class ViewsModule { }
