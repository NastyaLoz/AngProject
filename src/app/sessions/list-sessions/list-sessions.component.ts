import {Component, OnInit, ViewChild} from '@angular/core';
import {ChargePole, Session, PeriodicElement} from "../../interfices/AngProject.interfaces";
import * as moment from "moment";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

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
  selected: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: any;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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

  sessions: Session[] = [{
    sessionId:-1,
    chargePole: this.chargePoles[0],
    dt: moment().format('YY-MM-DD HH_mm_ss'),
    start:moment().format('HH_mm_ss'),
    stop:moment().format('HH_mm_ss'),
    smart:false,
  }]

  constructor() { }


  ngOnInit(): void {
    this.selected = this.chargePoles[0].chargepoleId;
  }


}
