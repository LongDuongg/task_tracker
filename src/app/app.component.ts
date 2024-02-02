import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './compoents/header/header.component';
import { TasksComponent } from './compoents/tasks/tasks.component';
import { AddTaskFormComponent } from "./compoents/add-task-form/add-task-form.component";
import { Task } from './interface/task';
import { TaskService } from './services/task.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      HeaderComponent,
      TasksComponent,
      AddTaskFormComponent
    ]
})
export class AppComponent implements OnInit {
  title = 'task_tracker';
  taskService: TaskService = inject(TaskService);
  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((tasks) => {
     this.tasks = tasks
   });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(() => {
      this.tasks.push(task)
    });
  }

  updateTask(event: any) {
    this.taskService.editTask(event.id, event.task).subscribe(() => {
      this.tasks = this.tasks.map((t) => {
        return t.id === event.id ?  event.task : t;
        
      })
    });
  }
}
