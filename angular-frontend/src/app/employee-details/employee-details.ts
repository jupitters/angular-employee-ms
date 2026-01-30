import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit{

  id: number | undefined;
  employee: Employee | undefined;
  constructor(){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeeService.getEmployeeByID(this.id).subscribe(data => {
      this.employee = data;
    });
  }
}
