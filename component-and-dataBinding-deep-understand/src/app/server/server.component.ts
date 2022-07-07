import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  @Input('serverList') serversObject! : { type: string, name: string, content: string };
  constructor() {

  }

  ngOnInit(): void {
  }

}