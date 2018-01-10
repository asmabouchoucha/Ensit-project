import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../core/services/session.service";
import { NgForm } from "@angular/forms/forms";
import { OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
formateurs; 
  constructor(private sessionsService:SessionService,
     private location: Location,
    private toastr: ToastrService) { 
   
  }

  ngOnInit() {
    
    
      this.sessionsService.getFormateurs().subscribe(formateurs=>{
        //  location.reload();
      this.formateurs=formateurs;

  } );
    
}


  onSubmit(form:NgForm){
     console.log(form.value)
     console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    this.sessionsService.addFormateur(form.value).subscribe();
     this.toastr.success("Formateur ajouté avec succès");
  }


  onDelete(formateur) {
 console.log('suppressionnnnnnnnnnnnnnnnnnnn')
 console.log(formateur)
   this.sessionsService.deleteFormateur(formateur).subscribe();
    this.toastr.success("Formateur supprimée avec succès");

  }
    

  relaod() {
    location.reload(); 
  }

}
