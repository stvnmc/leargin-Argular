import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  //template: '<p>here have a employee</p>',
  // styleUrls: ['./employee.component.css']
  // styles: [
  //   `
  //     p {
  //       background-color: red;
  //     }
  //   `,
  // ],
})
export class EmployeeComponent implements OnInit {
  name = 'Juan';
  lastName = 'Sias';
  years = 19;
  company = 'adidas';

  // getName() {
  //   return this.name;
  // }

  callNameCompany(value: String) {}
  constructor() {}
  ngOnInit(): void {}
}
