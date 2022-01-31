import {Component, Input, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {ApiUrl} from "../../app.module";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-delete-session',
  templateUrl: './delete-session.component.html',
  styleUrls: ['./delete-session.component.css']
})
export class DeleteSessionComponent implements OnInit {
  formModal: any;
  status: any;
  @Input() public session: any;
  @Output() public deletedSession = new EventEmitter();

  constructor(@Inject(ApiUrl) private apiUrl: string, private http: HttpClient) { }

  ngOnInit(): void {
  }
  // Modal Close
  closeModal(event:any) {
    event.preventDefault();
    event.stopPropagation();
    if(event.target.classList.contains("modal")) {
      this.formModal = false;
    }
  }

  delete(){
    debugger
    this.http.delete<any>(this.apiUrl + '/sessions/remove/' + this.session.sessionId).subscribe(result=> {
      this.status = 'Delete successful.';
      alert(this.status);
      this.formModal = false;
      this.deletedSession.emit(this.session);
    }, error => {
      this.status = "Error! Failed to remove session."
      alert(this.status);
      this.formModal = false;
      console.log(error);
    });
  }
}
