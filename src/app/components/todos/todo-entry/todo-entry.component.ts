import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss']
})
export class TodoEntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  add(descriptionE1: HTMLInputElement): void {
    // create a new TodoListItem
    // Do something with it
    this.itemAdded.emit(descriptionE1.value);
    // clear out the text in the textbox
    descriptionE1.value = '';
    descriptionE1.focus();
  }
}
