import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../interface/task';
import { TaskService } from '../../services/task.service';
import { FormService } from '../../services/form.service';


@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TaskService
  ],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent implements OnInit {

  @Input() currentTask!: Task;

  @Output() onAddTask = new EventEmitter();
  @Output() onEditTask = new EventEmitter();


  constructor(public _formService: FormService) {

  }

  ngOnInit(): void {
    this._formService.onCreateForm();
    
  }

  onSubmit() {
   if(this._formService.form.valid) {
    this.onAddTask.emit(this._formService.form.value);
    console.log(this._formService.form.value);
    this._formService.form.reset();
    // console.log(this.currentTask);
   }
  }
}
