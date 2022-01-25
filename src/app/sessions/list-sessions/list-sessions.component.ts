import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChargePole, Session, PeriodicElement, SessionList} from "../../interfices/AngProject.interfaces";
import * as moment from "moment";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ApiUrl} from "../../app.module";
import {MatDialog} from "@angular/material/dialog";

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-list-sessions',
  templateUrl: './list-sessions.component.html',
  styleUrls: ['./list-sessions.component.css']
})
export class ListSessionsComponent implements OnInit {
  selected: any = 1;
  sessionsArray: any;
  chargerPoleArray: any;
  num:any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumnsTwo: string[] = ['position', 'name', 'data', 'start', 'stop'];
  dataSourceTwo: any;
  @ViewChild(MatPaginator) paginator: any;

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
    {
      chargepoleId:3,
      power_source:"DC",
      power_level:"5",
      cost_optimization:"0",
      charging_time:"0",
      name:"E100561*003"
    },
    {
      chargepoleId:4,
      power_source:"AC",
      power_level:"2",
      cost_optimization:"1",
      charging_time:"0",
      name:"E100561*004"
    },
    {
      chargepoleId:5,
      power_source:"AC",
      power_level:"10",
      cost_optimization:"1",
      charging_time:"1",
      name:"E100561*005"
    },
    {
      chargepoleId:6,
      power_source:"DC",
      power_level:"2",
      cost_optimization:"1",
      charging_time:"1",
      name:"E100561*006"
    },
    {
      chargepoleId:7,
      power_source:"AC",
      power_level:"6",
      cost_optimization:"0",
      charging_time:"0",
      name:"E100561*007"
    },
    {
      chargepoleId:8,
      power_source:"DC",
      power_level:"1",
      cost_optimization:"1",
      charging_time:"1",
      name:"E100561*008"
    },
    {
      chargepoleId:9,
      power_source:"AC",
      power_level:"11",
      cost_optimization:"0",
      charging_time:"1",
      name:"E100561*009"
    },
    {
      chargepoleId:10,
      power_source:"AC",
      power_level:"4",
      cost_optimization:"1",
      charging_time:"1",
      name:"E100561*0010"
    },
  ];

  sessions: SessionList[] = [
    {
      sessionId:1,
      chargepoleId: 1,
      // dt: new Date(),
      dt: new Date().toISOString(),
      start:"11:12",
      stop:"24:21",
      soc_final:0,
      soc_inittial:20,
      battery_size:60,
      smart:false,
      power:12,
      much_charge:0,
      control_applyed:false
    },
    {
      sessionId:21,
      chargepoleId: 1,
      // dt: new Date(),
      dt: new Date().toISOString(),
      start:"10:00",
      stop:"11:20",
      soc_final:10,
      soc_inittial:20,
      battery_size:60,
      smart:true,
      power:10,
      much_charge:0,
      control_applyed:false
    }]

  constructor(private http: HttpClient, @Inject(ApiUrl) private apiUrl: string, public dialog: MatDialog) {
    this.http.get<ChargePole[]>(this.apiUrl + '/sessions/chargepole').subscribe(result => {
      debugger
      this.chargerPoleArray = result;
      this.selected = this.chargerPoleArray[0].chargepoleId;
      // this.selected = this.chargerPoleArray[0].chargepoleId;
      this.getSessions(this.selected);
    }, error => {
      console.log(error);
    })
  }


  ngOnInit(): void {
  }

  getSessions(val: number){
    this.http.get<SessionList[]>(this.apiUrl + '/sessions/' + val).subscribe(result => {
      debugger
      this.sessionsArray = result;
      this.num = Array(this.sessionsArray.length).fill(0).map((e,i)=>i+1);
      this.dataSourceTwo = new MatTableDataSource<PeriodicElement>(this.sessionsArray);
    }, error => {
      console.log(error);
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
