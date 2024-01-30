import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private httpUrl="http://localhost:5000/tasks";
  constructor(private http:HttpClient) { }
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.httpUrl);
  }
  deleteTask(task:Task):Observable<Task>{
    const url=`${this.httpUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.httpUrl,task,httpOptions);
  }
}
