import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '404',
    loadChildren: () => import('./core/modules/404/404.module').then(m => m.FourZeroModule)
  },
  {
    path: '505',
    loadChildren: () => import('./core/modules/500/500.module').then(m => m.FiveZeroModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./modules/auth/pages/login/login.module').then(m => m.LoginModule)
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./modules/auth/pages/register/register.module').then(m => m.RegisterModule)
  // },
  // {
  //   path: 'silverSnickers',
  //   loadChildren: () => import('./modules/home/pages/silver-snickers/silver-snickers.module').then(m => m.SilverSnickersModule)
  // },
  // {
  //   path: 'membership',
  //   loadChildren: () => import('./modules/home/pages/membership/membership.module').then(m => m.MembershipModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
