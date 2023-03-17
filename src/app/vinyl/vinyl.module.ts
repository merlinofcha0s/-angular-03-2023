import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VinylComponent} from './vinyl/vinyl.component';
import { CountingButtonsComponent } from './counting-buttons/counting-buttons.component';

@NgModule({
  declarations: [
    VinylComponent,
    CountingButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [VinylComponent]
})
export class VinylModule {
}
