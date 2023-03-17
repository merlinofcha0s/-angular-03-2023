import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VinylComponent} from './vinyl/vinyl.component';
import { CountingButtonsComponent } from './counting-buttons/counting-buttons.component';
import { ListVinylComponent } from './list-vinyl/list-vinyl.component';
import {VinylService} from "./vinyl.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    VinylComponent,
    CountingButtonsComponent,
    ListVinylComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ListVinylComponent]
})
export class VinylModule {
}
