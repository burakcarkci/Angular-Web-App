import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus: string = "No server was created";
  serverName: string = "Test Server";
  username: string = "";
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  showSecret = false;
  log = [];



  constructor() {
    setTimeout(() =>{
    this.allowNewServer = true;

    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created" + " " + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername(){
    this.username="";
  }

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
