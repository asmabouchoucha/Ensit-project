import { Component, OnInit } from '@angular/core';
import { SessionItemService } from "../session-item.service";
import { ActivatedRoute } from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
 id;
 session;
 private sub: any;


  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionItemService,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      this.id=+params['id'];
    });
    this.session=this.sessionService.get(this.id);

  }

  onSubmit() {
    this.sessionService.add(this.session);
    this.toastr.success("Session modifiée avec succès", 'success!');


  }

}
