import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-session-menu',
  templateUrl: './session-menu.component.html',
  styleUrls: ['./session-menu.component.css']
})
export class SessionMenuComponent implements OnInit {
  menu:any = "list";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickButton(val:string){
    debugger
    this.menu = val;
    // if (this.menu == "create"){
    //   this.router.navigate(['createSession'] );
    // }
    // if (this.menu == "list"){
    //   this.router.navigate(['../listSession'] );
    // }
  }
}
