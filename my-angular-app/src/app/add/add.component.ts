import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  note: Note = new Note();

  constructor(private _noteService: TaskService) { }

  onSubmit(form) {
    console.log("heloooo I've been clicked")
    this._noteService.createNote(this.note)    
    this.note = new Note();
    form.resetForm();
  }
  
  ngOnInit() {
  }

}