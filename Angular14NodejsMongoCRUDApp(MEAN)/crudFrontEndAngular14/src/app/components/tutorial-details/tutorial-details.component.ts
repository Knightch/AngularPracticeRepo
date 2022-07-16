import { Component, Input, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentTutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  constructor() { }

  ngOnInit(): void {
  }

}
