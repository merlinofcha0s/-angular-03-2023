import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VinylComponent} from './vinyl/vinyl.component';

@NgModule({
  declarations: [
    VinylComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [VinylComponent]
})
export class VinylModule {
}
