import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-showchild',
  templateUrl: './showchild.component.html',
  styleUrl: './showchild.component.css'
})
export class ShowchildComponent {
  @Input() tasks: { name: string }[] = [];
  @Output() deleteTask = new EventEmitter<number>();

  onDeleteTask(index: number) {
    this.deleteTask.emit(index);
  }

}
