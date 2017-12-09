import { Component, OnInit, Input } from '@angular/core';
import { SessionItemService } from "../session-item.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-admin-session-item',
  templateUrl: './admin-session-item.component.html',
  styleUrls: ['./admin-session-item.component.css']
})
export class AdminSessionItemComponent implements OnInit {

  @Input() session: any;
  constructor(
    private sessionService: SessionItemService,
    private toastr: ToastrService

  ) { }

  ngOnInit() {

  }

  onDelete() {
    console.log("delete");
   this.sessionService.delete(this.session);
    this.toastr.success("Session supprimée avec succès", 'success!');

  }

}
