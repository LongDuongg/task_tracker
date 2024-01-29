import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent implements OnInit {

  @Output() onAddTask = new EventEmitter();

  text!: String; 
  day!: String; 
  reminder: boolean = false; 

  ngOnInit(): void {
      
  }

  onSubmit() {
    const newTask = {
      text : this.text,
      day : this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = ""
    this.day = ""
    this.reminder = false
  }
}
