import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
    <label for="">Server Name:</label>
    <input 
        type="text"
        class="form-control"
        [(ngModel)]="serverName">
    <br>
    <button 
    class="btn btn-primary"
    [disabled]="!allowCreateServer"
    (click)="onCreateServer()">Add Server</button>

    <app-server *ngFor="let server of servers"></app-server>
  `
})

export class ServersComponent implements OnInit {

  allowCreateServer = true;
  serverCreated = false;
  serverName = '';

  servers = ['Teste', 'Teste 2'];
  
  
  constructor() { }

  ngOnInit() {
  }

  onCreateServer()  {
    this.servers.push(this.serverName)
  }

}
