import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clickStatus = "you does not click button yet";

  onClickStatusChanage() {
    this.clickStatus = "You click button just!"
  }
}
