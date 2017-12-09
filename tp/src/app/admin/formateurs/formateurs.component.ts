import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../core/services/session.service";

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
formateurs; 
  constructor(private sessionsService:SessionService) { 
    
  }

  ngOnInit() {
      this.sessionsService.getFormateurs().subscribe(formateurs=>{
      this.formateurs=formateurs;
  } );

}

}
