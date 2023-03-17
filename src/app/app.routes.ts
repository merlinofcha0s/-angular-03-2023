import {Routes} from "@angular/router";
import {ListVinylComponent} from "./vinyl/list-vinyl/list-vinyl.component";
import {EmployeeComponent} from "./employee/employee.component";
import {EditVinylComponent} from "./vinyl/edit-vinyl/edit-vinyl.component";
import {EditEmployeeComponent} from "./employee/edit-employee/edit-employee.component";

export const ROUTES: Routes = [
  {
    path: '',
    component: ListVinylComponent
  },
  {
    path: 'employees',
    component: EmployeeComponent
  },
  {
    path: 'vinyl/edit',
    component: EditVinylComponent
  },
  {
    path: 'employees/edit',
    component: EditEmployeeComponent
  }
]
