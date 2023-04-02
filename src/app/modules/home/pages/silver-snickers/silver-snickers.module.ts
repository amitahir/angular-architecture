import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SilverSnickersRoutingModule } from './silver-snickers-routing.module';
import { SilverSnickersComponent } from './silver-snickers.component';


@NgModule({
  declarations: [
    SilverSnickersComponent
  ],
  imports: [
    CommonModule,
    SilverSnickersRoutingModule
  ],
  exports: [SilverSnickersComponent]
})
export class SilverSnickersModule { }
