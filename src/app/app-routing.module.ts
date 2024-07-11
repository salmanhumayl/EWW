import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SolutionsComponent } from './views/solutions/solutions.component';
import { ConstructionComponent } from './views/construction/construction.component';

const routes: Routes = [

  { 
    path:'',
    component : HomeComponent,
    pathMatch:'full'
  },

  {
    path:'aboutus',
    component : AboutComponent,
  },
  {
    path:'solutions',
    component : SolutionsComponent,
  },
  {
    path:'construction',
    component : ConstructionComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
