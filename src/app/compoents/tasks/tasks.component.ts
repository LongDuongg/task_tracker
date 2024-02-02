import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../interface/task';
import { TaskComponent } from './task/task.component';
import { TaskService } from '../../services/task.service';
import { FormService } from '../../services/form.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    TaskComponent,
    HttpClientModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  @Input() taskList!: Task[];
  taskService: TaskService = inject(TaskService);

  constructor(public _formService: FormService) {
    
  }

  ngOnInit(): void {
   
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.taskList = this.taskList.filter((t) => t.id !== task.id)
    })
  }

  toggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.toggleTask(task).subscribe();
  }

  selectTask(task: Task) {
    let currentTask = this.taskList.find((t) => t.id === task.id)
    console.log(currentTask);

    this._formService.form.setValue({
      text: currentTask?.text,
      day: currentTask?.day,
      reminder: currentTask?.reminder,
    })

    this._formService.editMode = true;
    this._formService.currentTaskID = currentTask?.id;
  }
}
