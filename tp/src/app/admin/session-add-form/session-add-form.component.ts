import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { SessionItemService } from "../session-item.service";
import {ToastrService} from "ngx-toastr";
import {Session} from "../../core/Models/session";
import { SessionService } from "../../core/services/session.service";
@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {


  constructor(
   
    private toastr: ToastrService,
    private sessionService: SessionService

  ) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    // const value=form.value;
    // const session= new Session(value.id,value.name,value.track,value.date,value.duree, value.local,value.participants,false)
     console.log(form.value)
    this.sessionService.addSession(form.value).subscribe();
   
    this.toastr.success("Session ajoutée avec succès", 'success!');

  }

}
