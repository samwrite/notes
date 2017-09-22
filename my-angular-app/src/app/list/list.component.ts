import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  notes;
  constructor(private _noteService: TaskService) {
    this._noteService.noteObserver.subscribe((notes) => {
      this.notes = notes;
    })
    this._noteService.getAll();
  }
  ngOnInit() {
  }

}