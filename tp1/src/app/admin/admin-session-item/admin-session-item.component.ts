import { Component, OnInit, Input } from '@angular/core';
import { SessionItemService } from "../session-item.service";
import {ToastrService} from "ngx-toastr";
import { SessionService } from "../../core/services/session.service";
import { Location } from '@angular/common';



@Component({
  selector: 'app-admin-session-item',
  templateUrl: './admin-session-item.component.html',
  styleUrls: ['./admin-session-item.component.css']
})
export class AdminSessionItemComponent implements OnInit {

  @Input() session: any;
  constructor(
    private sessionService: SessionService,
    private toastr: ToastrService,
    private location: Location,

  ) { }

  ngOnInit() {

  }

  onDelete() {
 
   this.sessionService.deleteSession(this.session).subscribe();
    this.toastr.success("Session supprimée avec succès", 'success!');

  }

reload() {
location.reload();
}
}
