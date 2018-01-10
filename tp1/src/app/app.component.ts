import { Component } from '@angular/core';
import { SessionItemListComponent } from "./session-item-list/session-item-list.component";
import { RouterModule, Routes} from '@angular/router'; 
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {


  

date= new Date(); 
firstSession= {
  id:1,
  name:'Formation Web',
  track: 'Mean Stack',
  date : new Date('2017,10,10'),
  duree: 3,
  local: 'Ensit',
  participants: 0
};
}
