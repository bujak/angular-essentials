import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-user',
  template: `
    <input type="text" [(ngModel)]="name"/>
    <p>Hello {{name}} from user component</p>
  `
  })
export class UserComponent {
  @Input() name;
  onUserInput(event) {
    this.name = event.target.value;
  }
}
