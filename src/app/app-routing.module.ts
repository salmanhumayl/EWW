import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

 // {
 //   path: '',
  //  component: HomeComponent
 // },
  {
    path: 'aboutus',
    loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'construction',
    loadChildren: () => import('./views/construction/construction.module').then(m => m.ConstructionModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'dealers',
    loadChildren: () => import('./views/dealers/dealers.module').then(m => m.DealersModule)
  },
  {
    path: 'equipment',
    loadChildren: () => import('./views/equipment/equipment.module').then(m => m.EquipmentModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./views/faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'leasing',
    loadChildren: () => import('./views/leasing/leasing.module').then(m => m.LeasingModule)
  },
  {
    path: 'manufacturers',
    loadChildren: () => import('./views/manufacturers/manufacturers.module').then(m => m.ManufacturersModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./views/policy/policy.module').then(m => m.PolicyModule)
  },
  {
    path: 'solutions',
    loadChildren: () => import('./views/solutions/solutions.module').then(m => m.SolutionsModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./views/team/team.module').then(m => m.TeamModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
