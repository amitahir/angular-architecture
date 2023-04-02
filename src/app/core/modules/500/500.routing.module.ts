import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveZeroComponent } from './500.component';


const routes: Routes = [{ path: '', component: FiveZeroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiveZeroRoutingModule { }
