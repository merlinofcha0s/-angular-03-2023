import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {VinylModule} from "./vinyl/vinyl.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {EmployeeModule} from "./employee/employee.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
