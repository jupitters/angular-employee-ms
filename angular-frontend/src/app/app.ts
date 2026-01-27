import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmployeeList} from './employee-list/employee-list';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-frontend');
}
