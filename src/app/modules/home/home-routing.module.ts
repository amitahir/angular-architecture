import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children: [
      {
        path: 'silver',
        loadChildren: () => import('./pages/silver-snickers/silver-snickers.module').then(m => m.SilverSnickersModule)
      },
      {
        path: 'membership',
        loadChildren: () => import('./pages/membership/membership.module').then(m => m.MembershipModule)
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
