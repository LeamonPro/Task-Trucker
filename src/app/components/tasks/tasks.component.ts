import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => { this.tasks = tasks }
    );

  }
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  onToggle(task:Task){
    task.reminder=!task.reminder;
  }
  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task);    })  }
}
