import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@gular.ng',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mila.jpg'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 72771017,
      dateOfBirth: new Date('02/25/1998'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/jlaw.jpg'
    },
    {
      id: 3,
      name: 'Kylie Page',
      gender: 'Female',
      contactPreference: 'Email',
      email: 'kylie@hooker.xxx',
      dateOfBirth: new Date('11/27/1985'),
      department: 'Dev',
      isActive: true,
      photoPath: 'assets/images/kylie.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
