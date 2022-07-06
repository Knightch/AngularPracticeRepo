import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverName = '';
  serverContent = '';
  serverType = ''
  // showDetails = false;
  serverDetails = [{
    type: this.serverType,
    name: this.serverName,
    content: this.serverContent
  }]

  onAddingServer() {
    this.serverDetails.push(
      {
        type: 'addingServer',
        name: this.serverName,
        content: this.serverContent
      }
    )
  }
  onAddingBlueprint() {
    this.serverDetails.push(
      {
        type: 'blueprintServer',
        name: this.serverName,
        content: this.serverContent
      }
    )
  }
}
