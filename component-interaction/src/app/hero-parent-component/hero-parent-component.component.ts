import { Component, OnInit } from '@angular/core';
import { HEROES } from '../hero';

@Component({
  selector: 'app-hero-parent-component',
  templateUrl: './hero-parent-component.component.html',
  styleUrls: ['./hero-parent-component.component.css']
})
export class HeroParentComponentComponent implements OnInit {
  heroes = HEROES;
  master = 'Master'
  constructor() { }

  ngOnInit(): void {
  }

}
