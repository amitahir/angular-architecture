import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SilverSnickersModule } from './pages/silver-snickers/silver-snickers.module';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SilverSnickersModule,
    LayoutModule
  ]
})
export class HomeModule { }
