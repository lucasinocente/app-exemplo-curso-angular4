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

    onCreateServer()  {
        this.serverStatus = 'online';
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}
