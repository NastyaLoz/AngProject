import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
// import {UserInfoModel} from "../../_shared/services/models/user-info.model";
// import {AuthService} from "../../_shared/services/auth.service";

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SiteHeaderComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

  // Modal Close
  closeModal(event:any) {

  }


}
