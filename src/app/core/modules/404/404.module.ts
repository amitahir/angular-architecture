import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourZeroComponent } from './404.component';
import { FourZeroRoutingModule } from './404.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FourZeroRoutingModule
  ],
  declarations: [FourZeroComponent]
})
export class FourZeroModule { }
