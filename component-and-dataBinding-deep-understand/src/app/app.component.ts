
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverDetails = [{ type: '', name: '', content: '' }]

  addServer(serverData: { name: string, content: string }) {
    this.serverDetails.push({
      type: 'addingServer',
      name: serverData.name,
      content: serverData.content
    });
  }
  addBlueprint(blueprintData: { name: string, content: string }) {
    this.serverDetails.push({
      type: 'blueprintServer',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }
}
