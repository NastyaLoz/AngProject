import { Component, OnInit, Input } from '@angular/core';
// import {UserInfoModel} from "../../_shared/services/models/user-info.model";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {
  // @Input() userData!: UserInfoModel;

  public toggled: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  collapsedSidebar(collapsed: boolean){
    this.toggled=collapsed;
  }
}
