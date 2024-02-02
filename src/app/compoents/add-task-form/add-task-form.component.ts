import { Component, EventEmitter, OnInit, Output, Input, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../interface/task';
import { TaskService } from '../../services/task.service';
import { FormService } from '../../services/form.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskService
  ],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent implements OnInit {

  @Output() onAddTask = new EventEmitter();
  @Output() onEditTask = new EventEmitter<{id: any, task: Task}>();

  taskService: TaskService = inject(TaskService);

  constructor(public _formService: FormService) {

  }

  ngOnInit(): void {
    this._formService.onCreateForm();
  }

 

  onSubmit() {
    if(this._formService.form.valid) {
      if(this._formService.editMode) {
        this.onEditTask.emit({id :this._formService.currentTaskID,task: this._formService.form.value}) 
        this._formService.editMode = false;
        this._formService.currentTaskID = null;
      } else {
        this.onAddTask.emit(this._formService.form.value);
      }
      this._formService.form.reset();
    }
  }
}
