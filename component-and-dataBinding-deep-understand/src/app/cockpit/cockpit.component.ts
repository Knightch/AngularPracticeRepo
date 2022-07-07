import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
 @Output('serverCreate') createServer = new EventEmitter<{name:string,content:string}>();
 @Output('blueprintCreate')  createdBlueprint = new EventEmitter<{name:string,content:string}>();
  // serverName = '';
  serverContent = '';
  serverType = ''
  constructor() { }

  ngOnInit(): void {
  }

  onAddingServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    this.createServer.emit({name:nameInput.value,content:this.serverContent});
  }

  onAddingBlueprint(nameInput: HTMLInputElement) {
    this.createdBlueprint.emit({name:nameInput.value,content:this.serverContent});
  }
}
