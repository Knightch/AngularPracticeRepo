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
  userName = '';
  statusList = [{
    name: '',
    status: '',
    color: ''
  }]
  constructor() { }

  gettingTextColor() {
    return this.statusOnSocialMedia === 'online' ? 'green' : 'red';
  }
  ngOnInit(): void {
  }
  addText() {
    this.userTypedText = true
  }
  addingStatus() {
    this.statusOnSocialMedia = Math.random() > 0.4 ? 'online' : 'offline';
    let textColor = this.statusOnSocialMedia === 'online' ? 'green' : 'red';
    this.statusList.push({ name: this.userName,status:this.statusOnSocialMedia ,color:textColor})
  }
}
