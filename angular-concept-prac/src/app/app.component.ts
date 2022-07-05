import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clickStatus = "you does not click button yet";
  inputValue = '';
  inputAnotherValue = '';

  onClickStatusChanage() {
    this.clickStatus = "You click button just!"
  }

  onTakingInput(event: Event) {
    // console.log(event)
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onTakingAnotherWayOfInput(event: any) {
    this.inputAnotherValue = event.target.value;
  }
}
