import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  @Input() name = '';
  @Output() voted = new EventEmitter<boolean>();

  didVote = false;

  vote(agrred: boolean) {
    this.voted.emit(agrred);
    this.didVote = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
