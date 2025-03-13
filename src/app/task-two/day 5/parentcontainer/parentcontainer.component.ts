import { Component } from '@angular/core';

@Component({
  selector: 'app-parentcontainer',
  templateUrl: './parentcontainer.component.html',
  styleUrl: './parentcontainer.component.css'
})
export class ParentcontainerComponent {
  tasks: { name: string}[] = [];

  addTask(taskName: string) {
    this.tasks.push({ name: taskName });
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
