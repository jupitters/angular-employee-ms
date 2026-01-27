import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {NgForOf} from '@angular/common';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [
    NgForOf
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit{
  employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void{
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }
}
