import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports:[HeaderComponent, FooterComponent]
})
export class LayoutModule { }
