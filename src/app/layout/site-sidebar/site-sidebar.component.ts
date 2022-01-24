import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-site-sidebar',
  templateUrl: './site-sidebar.component.html',
  styleUrls: ['./site-sidebar.component.css'],
})
export class SiteSidebarComponent implements OnInit {
  public toggled: boolean = false;

  @Output() collapsedSidebar = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggledSideBar() {
    this.toggled = !this.toggled;
    this.collapsedSidebar.emit(this.toggled);
  }

  onResize(event:any) {
    // console.log('inner width: ',window.innerWidth);
    if (window.innerWidth <= 768) {
      this.toggled = true;
    } else {
      this.toggled = false;
    }
  }
}
