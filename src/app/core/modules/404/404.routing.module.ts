import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourZeroComponent } from './404.component';


const routes: Routes = [{ path: '', component: FourZeroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourZeroRoutingModule { }
