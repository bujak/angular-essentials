import {Component} from '@angular/core';


@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)"/>
    <p>Hello {{name}} from user component</p>
  `
  })
export class UserComponent {
  name = 'tomek';
  onUserInput(event) {
    this.name = event.target.value;
  }
}
