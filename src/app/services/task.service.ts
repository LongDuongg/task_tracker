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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>("http://localhost:5000/tasks");
  } 

  getTask(task: Task): Observable<Task> {
    return this.http.get<Task>(`http://localhost:5000/tasks/${task.id}`);
  }

  deleteTask(task:Task) : Observable<Task> {
    return this.http.delete<Task>(`http://localhost:5000/tasks/${task.id}`);
  }

  toggleTask(task: Task) : Observable<Task> {
    return this.http.put<Task>(`http://localhost:5000/tasks/${task.id}`, task, this.httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`http://localhost:5000/tasks`, task, this.httpOptions);
  }

  editTask(id: any, task: Task): Observable<Task> {
    return this.http.put<Task>(`http://localhost:5000/tasks/${id}`, task, this.httpOptions);
  }
}
