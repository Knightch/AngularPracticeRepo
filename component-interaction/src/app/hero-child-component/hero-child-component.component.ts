import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-child-component',
  templateUrl: './hero-child-component.component.html',
  styleUrls: ['./hero-child-component.component.css']
})
export class HeroChildComponentComponent implements OnInit {
  @Input() hero!: Hero;
  @Input('master') masterName = '';
  constructor() { }

  ngOnInit(): void {
  }

}
