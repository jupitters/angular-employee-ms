import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {NgForOf} from '@angular/common';
import {EmployeeService} from '../employee.service';
import {Router} from 'express';

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

  constructor(private employeeService: EmployeeService, private router: Router){}

  ngOnInit(): void{
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }

  private updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
}
