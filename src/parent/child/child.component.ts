import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child',
  standalone: true,
  template: `
      <h2>Child Component</h2>
  `
})
export class Child {
  @Output() deposit = new EventEmitter()
  constructor() {
      setInterval(()=>this.deposit.emit('data from Child' + Date.now()),1000)
  }    }
