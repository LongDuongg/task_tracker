import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../interface/task';
import { TaskComponent } from './task/task.component';
import { TaskService } from '../../services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskFormComponent } from '../add-task-form/add-task-form.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    TaskComponent,
    HttpClientModule,
    AddTaskFormComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  taskService: TaskService = inject(TaskService);

  ngOnInit(): void {
   this.taskService.getAllTasks().subscribe((tasks) => {
    this.tasks = tasks
   });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id)
    })
  }
}
