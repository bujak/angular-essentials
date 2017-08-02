import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() items = [];
  itemAdded = new EventEmitter<string>();
  newItem = '';

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {

  }
}
