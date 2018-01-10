import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpModule, Http} from "@angular/http";
import 'rxjs/add/operator/map';
import { Session } from "../Models/session";


@Injectable()
export class SessionService {

  constructor(
    private http: Http,
  ) { }


  public getSessions(): Observable<any> {
    return this.http.get("http://localhost:3000/api/sessions")

      .map((res: any) => {

        if (res) {
          return res.json();

        }

      }
      );

  }

  public getSession(id): Observable<any> {
    return this.http.get("http://localhost:3000/api/session/"+id)
      .map((res: any) => {
        if (res) {
          return res.json();
        }
      }
      );

  }

    //  Edit Session 

  public editSession(session,id): Observable<any> {
    return this.http.put("http://localhost:3000/api/update/"+id,session)
      .map((res: any) => {
        if (res) {
          return res.json();
        }
      }
      );

  }

  // Delete Session 
  public deleteSession(session) {
    return this.http.delete ('http://localhost:3000/api/session/'+session._id)
    .map(res=> res.json());
  }


  public addSession(session): Observable<any> {

    return this.http.post("http://localhost:3000/api/sessions", session)

      .map((res: any) => res.json());
  }

   // Get Sessions Size 
   public sizeSessions() {
    return this.http.get ('http://localhost:3000/api/sessions/size')
    .map(res=> res.json());
  }

  // -------------------------------- Formateurs -----------------------------------

  // Get Formateur
  public getFormateurs(): Observable<any> {
    return this.http.get("http://localhost:3000/api/formateurs")

      .map((res: any) => {

        if (res) {
          return res.json();

        }

      }
      );

  }

    //  Add Formateur
  public addFormateur(formateur): Observable<any> {

    return this.http.post("http://localhost:3000/api/formateur", formateur)

      .map((res: any) => res.json());
  }

    // Delete Formateur 
  public deleteFormateur(formateur) {
    return this.http.delete ('http://localhost:3000/api/formateur/'+formateur._id)
    .map(res=> res.json());
  }

   // Get Formateurs Size 
   public sizeFormateurs() {
    return this.http.get ('http://localhost:3000/api/formateurs/size')
    .map(res=> res.json());
  }
    public getFormateur(id): Observable<any> {
    return this.http.get("http://localhost:3000/api/formateur/"+id)
      .map((res: any) => {
        if (res) {
          return res.json();
        }
      }
      );

  }

  // -------------------------------- Participants -----------------------------------

  // Get Participant
  public getParticipants(): Observable<any> {
    return this.http.get("http://localhost:3000/api/participants")

      .map((res: any) => {

        if (res) {
          return res.json();

        }

      }
      );

  }

    //  Add Participant
  public addParticipant(participant): Observable<any> {

    return this.http.post("http://localhost:3000/api/participant", participant)

      .map((res: any) => res.json());
  }

    // Delete Participant 
  public deleteParticipant(participant) {
    return this.http.delete ('http://localhost:3000/api/participant/'+participant._id)
    .map(res=> res.json());
  }

  // Get Participants Size 
   public sizeParticipants() {
    return this.http.get ('http://localhost:3000/api/participants/size')
    .map(res=> res.json());
  }


}
