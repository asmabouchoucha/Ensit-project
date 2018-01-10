import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../core/services/session.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formateurs; 
  track1=0;
  track2=0; 
  track3=0; 
  sizeParticipants; 
  sizeFormateurs; 
  sizeSessions; 
  test=0; 
  constructor(   private sessionService:SessionService, private location: Location) { 
    
  }

  ngOnInit() {
 
   this.sessionService.sizeFormateurs().subscribe(sessions => {
      
   
        this.sizeFormateurs = sessions;
         
      });
         this.sessionService.sizeParticipants().subscribe(sessions => {

        this.sizeParticipants = sessions;
         console.log(this.sizeParticipants)
      });
         this.sessionService.sizeSessions().subscribe(sessions => {

        this.sizeSessions = sessions;
         console.log(this.sizeSessions)
      });

       this.sessionService.getSessions().subscribe(sessions => {
   for (let i of sessions ) {
     console.log(i.track)
            if (i.track == "track 1") {
        this.track1++;      
        
      }
        if (i.track == "track 2") {
        this.track2++;   }
        if (i.track == "track 3") {
        this.track3++;   }
   }
       
      });

     this.sessionService.getFormateurs().subscribe(formateurs => {
         this.formateurs=formateurs;
        
      } );
  
  }
    reload() {
      location.reload(); 
    }

}
