import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formchild',
  templateUrl: './formchild.component.html',
  styleUrl: './formchild.component.css'
})
export class FormchildComponent {
  @Output() addTask = new EventEmitter<string>();
  taskName: string = '';

  onSubmit() {
    if (this.taskName.trim()) {
      this.addTask.emit(this.taskName);
      this.taskName = '';
    }
  }
}
