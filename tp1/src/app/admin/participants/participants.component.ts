import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../core/services/session.service";
import { NgForm } from "@angular/forms/forms";

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
participants; 
  constructor(private sessionsService:SessionService) { 
    
  }

  ngOnInit() {
      this.sessionsService.getParticipants().subscribe(participants=>{
      this.participants=participants;
  } );
}


  onSubmit(form:NgForm){
     console.log(form.value)
     console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    this.sessionsService.addParticipant(form.value).subscribe();
  }


  onDelete(participant) {
 console.log('suppressionnnnnnnnnnnnnnnnnnnn')
 console.log(participant)
   this.sessionsService.deleteParticipant(participant).subscribe();
    // this.toastr.success("Session supprimée avec succès", 'success!');
    

  }


}
