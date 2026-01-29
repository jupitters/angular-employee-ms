import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {ActivateRoute} from '@angular/router';

@Component({
  selector: 'app-update-employee',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css',
})
export class UpdateEmployee {
    employee: Employee = new Employee();
    constructor(private employeeService: EmployeeService, private route: ActivateRoute) {
    }

    ngOnInit(): void{
      this.employeeService.getEmployeeById()
    }
}
