import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VinylComponent} from './vinyl/vinyl.component';
import { CountingButtonsComponent } from './counting-buttons/counting-buttons.component';
import { ListVinylComponent } from './list-vinyl/list-vinyl.component';
import {VinylService} from "./vinyl.service";
import {HttpClientModule} from "@angular/common/http";
import {EditVinylComponent} from "./edit-vinyl/edit-vinyl.component";
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    VinylComponent,
    CountingButtonsComponent,
    ListVinylComponent,
    EditVinylComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class VinylModule {
}
