import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Aman', 'Rangila', 'Raju', 'Knight'];

  onVoted(agree: boolean) {
    if (agree) {
      this.agreed++
    } else {
      this.disagreed++
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
