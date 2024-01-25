import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../interface/task';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS;

  ngOnInit(): void {
      
  }
}
