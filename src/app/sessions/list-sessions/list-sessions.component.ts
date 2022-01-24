import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-sessions',
  templateUrl: './list-sessions.component.html',
  styleUrls: ['./list-sessions.component.css']
})
export class ListSessionsComponent implements OnInit {
  formModal: any;
  constructor() { }

  ngOnInit(): void {
  }
  // Modal Close
  closeModal(event:any) {
    event.preventDefault();
    event.stopPropagation();
    if(event.target.classList.contains("modal")) {
      this.formModal = false;
    }
  }
}
