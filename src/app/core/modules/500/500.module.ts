import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveZeroComponent } from './500.component';
import { FiveZeroRoutingModule } from './500.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FiveZeroRoutingModule
  ],
  declarations: [FiveZeroComponent]
})
export class FiveZeroModule { }
