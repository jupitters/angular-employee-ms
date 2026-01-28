import { Component } from '@angular/core';
import {Employee} from '../employee';

@Component({
  selector: 'app-create-employee',
  imports: [],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee {
  employee: Employee = new Employee();

  constructor() {
  }
}
