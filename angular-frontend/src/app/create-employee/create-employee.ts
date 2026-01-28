import { Component } from '@angular/core';
import {Employee} from '../employee';
import {FormsModule} from '@angular/forms';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-create-employee',
  imports: [
    FormsModule
  ],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.employee);
  }
}
