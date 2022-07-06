import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  serverName = '';
  serverContent = '';
  serverType = ''
  constructor() { }

  ngOnInit(): void {
  }

  onAddingServer() {
    // this.serverDetails.push(
    //   {
    //     type: 'addingServer',
    //     name: this.serverName,
    //     content: this.serverContent
    //   }
    // )
  }

  onAddingBlueprint() {
    // this.serverDetails.push(
    //   {
    //     type: 'blueprintServer',
    //     name: this.serverName,
    //     content: this.serverContent
    //   }
    // )
  }
}
