import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../interface/task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;
  @Output() onDeleteTask = new EventEmitter();

  ngOnInit(): void {
      
  }

 onDelete(task: Task) {
  this.onDeleteTask.emit(task);
 }
}
