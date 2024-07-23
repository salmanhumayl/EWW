import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SolutionsComponent } from './views/solutions/solutions.component';
import { ConstructionComponent } from './views/construction/construction.component';
import { ContactComponent } from './views/contact/contact.component';
import { TeamComponent } from './views/team/team.component';
import { EquipmentComponent } from './views/equipment/equipment.component';
import { LeasingComponent } from './views/leasing/leasing.component';
import { DealersComponent } from './views/dealers/dealers.component';
import { ManufacturersComponent } from './views/manufacturers/manufacturers.component';
import { PolicyComponent } from './views/policy/policy.component';
import { FaqComponent } from './views/faq/faq.component';
import { TermsconditionsComponent } from './views/termsconditions/termsconditions.component';

const routes: Routes = [

  { 
    path:'',
    component : HomeComponent,
    pathMatch:'full'
  },

  {
    path:'aboutus',
      component:AboutComponent
  },

  {
    path:'solutions',
    component:SolutionsComponent
  },

  {
    path:'construction',
    component:ConstructionComponent
  },


  {
    path:'equipment',
    component:EquipmentComponent
  },

  {
    path:'leasing',
    component:LeasingComponent
  },

  
  {
    path:'dealers',
    component:DealersComponent
  },

  {
    path:'manufacturers',
    component:ManufacturersComponent
  },
  {
    path:'team',
    component:TeamComponent
  },

  {
    path:'contactus',
    component:ContactComponent
  },

  {
    path:'policy',
    component:PolicyComponent
  },

  {
    path:'faq',
    component:FaqComponent
  },

 
  {
    path:'terms',
    component:TermsconditionsComponent
  }

  
  //{
   // path:'aboutus',
  //  loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule)
 // },

 // {
 //   path:'construction',
 //   loadChildren: () => import('./views/construction/construction.module').then(m => m.ConstructionModule)
 // }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
