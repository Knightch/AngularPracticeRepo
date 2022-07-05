import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-concept',
  templateUrl: './directive-concept.component.html',
  styleUrls: ['./directive-concept.component.scss']
})
export class DirectiveConceptComponent implements OnInit {
  inputText = "";
  userTypedText = false;
  constructor() { }

  ngOnInit(): void {
  }
  addText() {
    this.userTypedText = true
  }
}
