import { Component, OnInit, Directive, HostBinding, Input } from '@angular/core';
import {SessionService} from "../core/services/session.service";
import {Session} from "../core/Models/session";
import { Location } from '@angular/common';


@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})


export class SessionItemListComponent implements OnInit {

 sessionItems;
//tab=sessionItems;
 //session: Session[];
  tab:Session[];


  constructor(
   private sessionsService:SessionService, 
  private location: Location

  ) {

   }

  ngOnInit() {
    this.sessionsService.getSessions().subscribe(session=>{
      this.sessionItems=session;
    

    })
  }
     ngOnDestroy() {
      
    console.log("destroooooooooooooooooooooy  list ")
     
  }

  reload() {
    location.reload();
  }

}
