import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import {EditEmployeeComponent} from "./edit-employee/edit-employee.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
