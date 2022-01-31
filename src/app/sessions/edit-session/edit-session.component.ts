import {Component, Input, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {ChargePole, SessionList} from "../../interfices/AngProject.interfaces";
import {HttpClient} from "@angular/common/http";
import {ApiUrl} from "../../app.module";
import {MatDialog} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import * as moment from "moment";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent implements OnInit {
  formModal: any;
  status: any;
  selected: any = -1;
  powers: any = [0,1,2,3,4,5,6,7,8,9,10,11]
  chargePoleArray:any;
  start:any = "00:00";
  stop:any = "00:00";
  sessionId:any;

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  minDate = new Date();

  session: SessionList = {
    sessionId:-1,
    chargepoleId: 1,
    // dt: new Date(),
    dt: new Date(),
    start:moment().format('HH:mm'),
    stop:moment().format('HH:mm'),
    soc_final:0,
    soc_inittial:0,
    battery_size:0,
    smart:false,
    power:this.powers[0],
    much_charge:0,
    control_applyed: false,
    order_date: new Date().toISOString()
  }

  sessionIn:any;
  @Output() public editSession = new EventEmitter();


  constructor(private http: HttpClient, @Inject(ApiUrl) private apiUrl: string, public dialog: MatDialog, private route: ActivatedRoute, private _location: Location,
              private router: Router) {
    this.route.queryParams.subscribe(params => {
      debugger
      this.sessionId = Number(params['elementId']);
    });
  }

  ngOnInit(): void {
    debugger
    this.http.get<SessionList>(this.apiUrl + '/sessions/' + this.sessionId).subscribe(result=> {
      debugger
      this.sessionIn = result;
      this.getSession();
    }, error => {
      console.log(error);
    });
  }

  getSession(){
    this.http.get<ChargePole[]>(this.apiUrl + '/sessions/chargepole').subscribe(result => {
      debugger
      this.chargePoleArray = result;
      this.session = this.sessionIn;
      // var dt = new Date(this.session.dt);
      // this.date = new FormControl(dt);
      // this.serializedDate = new FormControl(dt.toISOString());
      this.session.dt = new Date(this.session.dt);
      var startHour = this.sessionIn.start.hours.toString().length == 1? "0" + this.sessionIn.start.hours: this.sessionIn.start.hours;
      var startMin = this.sessionIn.start.minutes.toString().length == 1? "0" + this.sessionIn.start.minutes: this.sessionIn.start.minutes;

      var stopHour = this.sessionIn.stop.hours.toString().length == 1? "0" + this.sessionIn.stop.hours : this.sessionIn.stop.hours;
      var stopMin = this.sessionIn.stop.minutes.toString().length == 1? "0" + this.sessionIn.stop.minutes : this.sessionIn.stop.minutes;

      this.session.start = startHour + ":" + startMin;
      this.session.stop = stopHour + ":" + stopMin;
    }, error => {
      console.log(error);
    })
  }

  clickSmart(){
    this.session.smart = !this.session.smart;
  }

  save(){
    this.http.put<SessionList>(this.apiUrl + '/sessions/update', this.session).subscribe(result=> {
      this.status = "Session changed."
      alert(this.status);
      this.formModal = false;
      this.editSession.emit(this.session);
      this.backClicked();
    }, error => {
      this.status = "Error! Failed to change session."
      alert(this.status);

      console.log(error);
    });
  }

  backClicked() {
    this._location.back();
  }

}
