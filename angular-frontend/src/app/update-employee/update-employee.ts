import {Component, OnInit} from '@angular/core';
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
export class UpdateEmployee implements OnInit{

    id: number;
    employee: Employee = new Employee();
    constructor(private employeeService: EmployeeService, private route: ActivateRoute) {
    }

    ngOnInit(): void{
      this.id = this.route.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
    }

    onSubmit(){
      this.employeeService.updateEmployee(this.id, this.employee);
    }
}
