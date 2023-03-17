import {Routes} from "@angular/router";
import {ListVinylComponent} from "./vinyl/list-vinyl/list-vinyl.component";
import {EmployeeComponent} from "./employee/employee.component";

export const ROUTES: Routes = [
  {
    path: '',
    component: ListVinylComponent
  },
  {
    path: 'employees',
    component: EmployeeComponent
  }
]
