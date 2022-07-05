import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-concept',
  templateUrl: './directive-concept.component.html',
  styleUrls: ['./directive-concept.component.scss']
})
export class DirectiveConceptComponent implements OnInit {
  inputText = "";
  userTypedText = false;
  statusOnSocialMedia: string = 'online';
  constructor() {
    this.statusOnSocialMedia = Math.random() > 0.4 ? 'online' : 'offline'
  }

  gettingBgColor() {
    return this.statusOnSocialMedia === 'online' ? 'green' : 'red';
  }
  ngOnInit(): void {
  }
  addText() {
    this.userTypedText = true
  }
}
