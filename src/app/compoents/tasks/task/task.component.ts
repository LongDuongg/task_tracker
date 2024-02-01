import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../interface/task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;
  faPenToSquare = faPenToSquare;
  @Output() onDeleteTask = new EventEmitter();
  @Output() onToggleTask = new EventEmitter();
  @Output() onSelectTask = new EventEmitter();

  ngOnInit(): void {
      
  }

 onDelete(task: Task) {
  this.onDeleteTask.emit(task);
 }

 onToggle(task: Task) {
  this.onToggleTask.emit(task);
 }

 onSelect(task: Task) {
  this.onSelectTask.emit(task);
 }
}
