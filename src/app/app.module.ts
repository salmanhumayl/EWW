import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './views/home/home.component';

import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { SolutionsComponent } from './views/solutions/solutions.component';
import { ConstructionComponent } from './views/construction/construction.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { EquipmentComponent } from './views/equipment/equipment.component';
import { LeasingComponent } from './views/leasing/leasing.component';
import { DealersComponent } from './views/dealers/dealers.component';
import { ManufacturersComponent } from './views/manufacturers/manufacturers.component';
import { TeamComponent } from './views/team/team.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SolutionsComponent,
    ConstructionComponent,
    AboutComponent,
    ContactComponent,
    EquipmentComponent,
    LeasingComponent,
    DealersComponent,
    ManufacturersComponent,
    TeamComponent
   
   
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
