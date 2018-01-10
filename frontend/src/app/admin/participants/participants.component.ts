import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../core/services/session.service";
import { NgForm } from "@angular/forms/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
participants; 
  constructor(private sessionsService:SessionService,
   private toastr: ToastrService) { 
    
  }

  ngOnInit() {
      this.sessionsService.getParticipants().subscribe(participants=>{
      this.participants=participants;
  } );
}


  onSubmit(form:NgForm){
     
    this.sessionsService.addParticipant(form.value).subscribe();
      this.toastr.success("Participant ajouté avec succès");
  }


  onDelete(participant) {
 console.log('suppressionnnnnnnnnnnnnnnnnnnn')
 console.log(participant)
   this.sessionsService.deleteParticipant(participant).subscribe();
    this.toastr.success("Participant supprimée avec succès");
    

  }


}
