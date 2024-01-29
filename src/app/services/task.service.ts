import { Injectable, Component } from '@angular/core';
import { Task } from '../interface/task';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Component({
  standalone: true,
  imports: [
    HttpClientModule
  ],
  template: ""
})
export class TaskService {
  
  constructor(private http: HttpClient) { 

  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>("http://localhost:5000/tasks");
  } 

  getTaskByID(id: number): Observable<Task> | undefined {
    return this.http.get<Task>(`http://localhost:5000/tasks/${id}`);
  }

  deleteTask(task:Task) : Observable<Task> {
    return this.http.delete<Task>(`http://localhost:5000/tasks/${task.id}`);
  }
}
