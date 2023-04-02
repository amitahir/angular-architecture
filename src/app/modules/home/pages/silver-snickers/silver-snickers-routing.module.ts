import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SilverSnickersComponent } from './silver-snickers.component';

const routes: Routes = [{ path: '', component: SilverSnickersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SilverSnickersRoutingModule { }
