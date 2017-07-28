import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name">
    <p>Hello {{name}} from user component</p>
  `
  })
export class UserComponent {
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>();
  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
