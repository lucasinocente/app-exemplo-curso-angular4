import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {

    serverID: number = 10;
    serverStatus: string = 'offline';
    serverName = '';

    allowCreateServer = true;

    serverCreated = false;

    onCreateServer()  {
        this.serverStatus = 'online';
        this.serverCreated = true;
    }

}
