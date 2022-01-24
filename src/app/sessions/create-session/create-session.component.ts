import {Component, Inject, OnInit} from '@angular/core';
import { Session,ChargePole } from "../../interfices/AngProject.interfaces";
import * as moment from 'moment';
import {HttpClient} from "@angular/common/http";
import {ApiUrl} from "../../app.module";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  formModal: any = true;
  selected: any;
  powers: any = [0,1,2,3,4,5,6,7,8,9,10,11]

  chargePoles: ChargePole[] = [
    {
      chargepoleId:1,
      power_source:"AC",
      power_level:11,
      cost_optimization:"1",
      charging_time:"1",
      name:"E100561*001"
    },
    {
      chargepoleId:2,
      power_source:"AC",
      power_level:11,
      cost_optimization:"1",
      charging_time:"1",
      name:"E100561*002"
    },
  ];

  newSession: Session = {
    sessionId:-1,
    chargePole: this.chargePoles[0],
    dt: moment().format('YY-MM-DD HH_mm_ss'),
    start:moment().format('HH_mm_ss'),
    stop:moment().format('HH_mm_ss'),
    smart:false,
  }

  constructor() {
    this.selected = this.chargePoles[0].chargepoleId;
  }

  ngOnInit(): void {

  }

  clickSmart(){
    this.newSession.smart = !this.newSession.smart;
  }

  save(){
    debugger
    var a = this.newSession;
  }

}
