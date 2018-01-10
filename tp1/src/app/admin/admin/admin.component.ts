import { Component, OnInit } from '@angular/core';
import { SessionItemService } from "../session-item.service";
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SessionItemService]
})
export class AdminComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() { 
     
  }
   ngOnDestroy() {
    console.log("destroooooooooooooooooooooy admin ")
     
  }

  reload(){
location.reload();

  }

}
