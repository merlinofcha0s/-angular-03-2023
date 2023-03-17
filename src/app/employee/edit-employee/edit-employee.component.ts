import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent {

  employeeForm: FormGroup = this.formBuilder.group({
    salary: new FormControl<string>('',
      [Validators.required]),
    uuid: new FormControl<string>('', [Validators.required])
  });

  constructor(private formBuilder: FormBuilder) {
  }

  addEmployee() {
    const newEmployee = this.employeeForm.value;
    console.dir(newEmployee);
  }
}
