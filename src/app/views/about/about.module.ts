import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HeaderModule } from '../header/header.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterModule } from '../footer/footer.module';




@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule
  ]
})
export class AboutModule { }
