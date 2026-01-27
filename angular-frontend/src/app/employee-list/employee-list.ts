import { Component } from '@angular/core';
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
export class EmployeeList {
  employees: Employee[] | undefined;
}
