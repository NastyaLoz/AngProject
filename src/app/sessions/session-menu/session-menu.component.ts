import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-menu',
  templateUrl: './session-menu.component.html',
  styleUrls: ['./session-menu.component.css']
})
export class SessionMenuComponent implements OnInit {
  menu:any;

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(val:string){
    this.menu = val;
  }
}
