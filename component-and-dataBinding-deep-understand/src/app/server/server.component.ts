import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
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
  ngDoCheck(): void {
    console.log("ngDoCheck is called!")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked is called!")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is called!")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked is called!")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit is called!")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy is called!")
  }
}
