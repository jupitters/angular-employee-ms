import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {NgForOf} from '@angular/common';

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

  constructor(){}

  ngOnInit(): void{
    this.employees = [
      {"id": 1, "firstName": "Ana", "lastName": "Dev", "email": "ana@dev.com", "jobTitle": "Dev"},
      {"id": 2, "firstName": "Bruno", "lastName": "Marketing", "email": "bruno@marketing.com", "jobTitle": "Marketing"}
    ];
  }
}
