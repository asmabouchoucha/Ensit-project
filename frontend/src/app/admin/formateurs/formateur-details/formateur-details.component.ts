import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SessionService } from "../../../core/services/session.service";

@Component({
  selector: 'app-formateur-details',
  templateUrl: './formateur-details.component.html',
  styleUrls: ['./formateur-details.component.css']
})
export class FormateurDetailsComponent implements OnInit {
formateur:any; 
  constructor(private route: ActivatedRoute,
  private formateurService:SessionService) {
   
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formateurService.getFormateur(params['id']).subscribe(formateur => {
        this.formateur = formateur;
         
     

      });

    });
  }

}
