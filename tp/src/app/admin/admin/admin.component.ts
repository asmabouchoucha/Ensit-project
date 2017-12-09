import { Component, OnInit } from '@angular/core';
import { SessionItemService } from "../session-item.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SessionItemService]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() { console.log("admin"); 
  }

}
