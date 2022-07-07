import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
 @Output('serverCreate') createServer = new EventEmitter<{name:string,content:string}>();
 @Output('blueprintCreate')  createdBlueprint = new EventEmitter<{name:string,content:string}>();
  // serverName = '';
  // serverContent = '';
  @ViewChild('serverContent') serverContentInput!: ElementRef;
  serverType = ''
  constructor() { }

  ngOnInit(): void {
  }

  onAddingServer(nameInput: HTMLInputElement) {
    this.createServer.emit({name:nameInput.value,content:this.serverContentInput.nativeElement.value});
  }

  onAddingBlueprint(nameInput: HTMLInputElement) {
    this.createdBlueprint.emit({name:nameInput.value,content:this.serverContentInput.nativeElement.value});
  }
}
