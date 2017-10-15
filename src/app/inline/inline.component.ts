import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
    <p>inline works!</p>
    And can call others components like 
    <br>
    <app-server></app-server>
    <app-server></app-server>
  `
})

export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
