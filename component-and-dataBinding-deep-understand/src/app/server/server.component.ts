import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit, OnChanges {
  @Input('serverList') serversObject!: { type: string, name: string, content: string };
  @Input() name!: String;
  constructor() {
    console.log("constructor is call")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges is called ")
    console.log(changes)
  }
  ngOnInit(): void {
    console.log("ngOnInit is call")
  }

}
