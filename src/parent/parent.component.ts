import { Component, OnInit } from '@angular/core';
import { Child } from './child/child.component';

@Component({

  selector: 'parent',
  standalone: true,
  imports:[Child],
  template: `
      Data recieved: {{data}}
      <child (deposit)="depositMoulah"></child>    
  `
})
export class Parent {
  data = null;
  depositMoulah($event) {
      this.data = $event.value
      // ...
  }
}