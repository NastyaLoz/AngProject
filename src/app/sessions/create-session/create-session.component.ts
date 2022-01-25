import {Component, Inject, OnInit} from '@angular/core';
import {Session, ChargePole, SessionList} from "../../interfices/AngProject.interfaces";
import * as moment from 'moment';
import {HttpClient} from "@angular/common/http";
import {ApiUrl} from "../../app.module";
import {MatDialog} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  selected: any = -1;
  powers: any = [0,1,2,3,4,5,6,7,8,9,10,11]
  chargePoleArray:any;
  status:any;

  chargePoles: ChargePole[] = [
    {
      chargepoleId:1,
      power_source:"AC",
      power_level:"11",
      cost_optimization:"1",
      charging_time:"1",
      name:"E100561*001"
    },
    {
      chargepoleId:2,
      power_source:"AC",
      power_level:"11",
      cost_optimization:"1",
      charging_time:"1",
      name:"E100561*002"
    },
  ];

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  newSession: SessionList = {
    sessionId:-1,
    chargepoleId: -2,
    // dt: new Date(),
    dt: new Date().toISOString(),
    start:moment().format('HH:mm'),
    stop:moment().format('HH:mm'),
    soc_final:0,
    soc_inittial:0,
    battery_size:0,
    smart:false,
    power:this.powers[0],
    much_charge:0
  }

  constructor(private http: HttpClient, @Inject(ApiUrl) private apiUrl: string, public dialog: MatDialog) {
    this.http.get<ChargePole[]>(this.apiUrl + '/sessions/chargepole').subscribe(result => {
      debugger
      this.chargePoleArray = result;
      this.newSession.chargepoleId = this.chargePoleArray[0].chargepoleId;
    }, error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

  clickSmart(){
    this.newSession.smart = !this.newSession.smart;
  }

  save(){
    debugger
    this.http.post<SessionList>(this.apiUrl + '/sessions/newSession', this.newSession).subscribe(result=> {
      this.status = "Session created successfully.";
      alert(this.status);

    }, error => {
      this.status = "Error! Failed to create session."
      alert(this.status);
      console.log(error);
    });
  }

}
