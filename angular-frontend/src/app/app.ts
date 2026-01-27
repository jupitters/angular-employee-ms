import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmployeeList} from './employee-list/employee-list';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutes} from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeList, HttpClientModule, BrowserModule, AppRoutes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-frontend');
}
