import {Component} from '@angular/core';


@Component({
  selector: 'app-user',
  template: `
    <input type="text" [(ngModel)]="name"/>
    <p>Hello {{name}} from user component</p>
  `
  })
export class UserComponent {
  name = '';
  // onUserInput(event) {
  //   this.name = event.target.value;
  // }
}
