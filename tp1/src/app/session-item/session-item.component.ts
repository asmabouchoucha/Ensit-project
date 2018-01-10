import { Component, OnInit, Input, Output, EventEmitter, Directive, HostBinding } from '@angular/core';
import { Session } from "../session";
import {ToastrService} from "ngx-toastr";



@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})

export class SessionItemComponent implements OnInit {
alignement='right';
isCompleted=false;
//name='Formation Mobile';
couleur='red';
@Input() session: any;


@Output() participantsChange= new EventEmitter<number>  ();
  constructor(
    private toastr: ToastrService

  ) {   }

  ngOnInit() { console.log(this.session);
  }
  inscrire () {
    console.log('Nouvelle Inscription..');
    console.log( this.session.participants);
    if (this.session.participants>=3) {
      this.session.isCompleted= true;
      this.toastr.error("Session complète! ", 'erreur!');

    }else {
      this.toastr.success("Inscription réussie! ", 'success!');
      this.session.participants= this.session.participants+1;


      console.log(this.session.participants+' participants');
      this.participantsChange.emit(this.session.participants);


    }

  }

}
