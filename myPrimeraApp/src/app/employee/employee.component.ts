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

  company = 'amazon';

  chanceCompany(event: Event) {
    this.company = (<HTMLInputElement>event.target).value;
  }

  // getName() {
  //   return this.name;
  // }

  callNameCompany(value: String) {}

  habilitInputText = false;

  registeredUser = false;
  textOfRegistered = 'No one registered';

  userRegistration() {
    this.registeredUser = true;
  }
  setUserRegistration(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    if ((<HTMLInputElement>event.target).value === 'yes') {
      this.textOfRegistered = 'The user just registered';
    } else {
      this.textOfRegistered = 'No one registered';
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
