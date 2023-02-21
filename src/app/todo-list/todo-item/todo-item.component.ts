import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Photo} from "../models/photo";

@Component({
  selector: 'element-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  standalone: true
})
export class TodoItemComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  @Input() photo!: Photo;
  @Output() onDelete = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // const { photo } = changes;
    //
    // console.log(photo.currentValue)
    console.log('ngOnChanges')
  }

  ngOnInit(): void {
    console.log('INIT APP');
  }

  ngDoCheck() {
    console.log('DO CHECK');
  }

  ngOnDestroy() {
    console.log('DESTROYED', this.photo.id);
  }
}
