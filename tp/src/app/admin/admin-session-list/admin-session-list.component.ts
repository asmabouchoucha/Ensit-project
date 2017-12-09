import { Component, OnInit } from '@angular/core';
import { sessionItems } from "../../sessions";
import {SessionService} from "../../core/services/session.service";

@Component({
  selector: 'app-admin-session-list',
  templateUrl: './admin-session-list.component.html',
  styleUrls: ['./admin-session-list.component.css']
})
export class AdminSessionListComponent implements OnInit {

 sessionItems;

  constructor(
    private sessionsService:SessionService

  ) {}

 
 ngOnInit() {
    this.sessionsService.getSessions().subscribe(session=>{
      this.sessionItems=session;
    

    })
  }

}
