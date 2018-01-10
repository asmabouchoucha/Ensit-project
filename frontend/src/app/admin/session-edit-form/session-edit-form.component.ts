import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { SessionService } from "../../core/services/session.service";
import { NgForm } from "@angular/forms/forms";
import { Location } from '@angular/common';

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
 id;
 session;
 private sub: any;
 track; 
 duree;
 name;


  constructor(
    private route: ActivatedRoute,
    private sessionsService:SessionService,
    private toastr: ToastrService,
    private location: Location,
    private router: Router

  ) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.sessionsService.getSession(params['id']).subscribe(sessions => {
        this.session = sessions;
     

      });

    });
    
  }

  onSubmit(form:NgForm) {
    this.route.params.subscribe(params => {
      this.sessionsService.editSession(form.value,params['id']).subscribe(sessions => {
        this.session = sessions;
      });
    });
    
    this.toastr.success("Session modifiée avec succès");
    this.router.navigate(['../admin/adminlist']);
  }


  reload() {
    location.reload();
  }

}
