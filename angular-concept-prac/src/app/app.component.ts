import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allowButton = false;
  emptyString = false;
  inputStatus = "Here is your Input Value";
  inputValue = '';
  userName = '';
  // inputAnotherValue = '';

  constructor() {
    setTimeout(() => {
      this.allowButton = true;
    }, 5000)
  }

  onClickStatusChanage() {
    this.inputStatus = this.inputValue;
  }

  onTakingInput(event: Event) {
    // console.log(event)
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  // onTakingAnotherWayOfInput(event: any) {
  //   this.inputAnotherValue = event.target.value;
  // }

  resetButtonActive() {
    this.emptyString = true
  }
  resetString() {
    this.userName = '';
    console.log(this.userName);
  }
}


