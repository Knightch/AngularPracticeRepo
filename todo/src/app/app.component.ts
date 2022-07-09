import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  // finishing up
  showComplete: boolean = false;
  private list = new TodoList("Aman", [
    new TodoItem("Go for run", true),
    new TodoItem("get flowers"),
    new TodoItem("collect tickets")
  ]);

  get userName(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length
  }

  get items(): readonly TodoItem[] {
    // Filtering Completed To-Do Items
    // showing also complete task
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  // function for adding To-Do Items
  addItem(newItem: string) {
    if (newItem != "") {
        this.list.addItem(newItem);
    }
}
}
