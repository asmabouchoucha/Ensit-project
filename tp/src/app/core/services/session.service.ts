import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpModule,Http} from "@angular/http";
import 'rxjs/add/operator/map';
import { Session } from "../Models/session";


@Injectable()
export class SessionService {

  constructor(
    private http: Http, 
  ) { }


  public getSessions(): Observable<any> {
    return this.http.get("http://localhost:3000/api/sessions")
    
      .map((res:any) => {
         
           if(res){
          return res.json();

        }
        
        }
      );

  }
    

  public addSession(session): Observable<any> {
    
    return this.http.post("http://localhost:3000/api/sessions" ,session)
    
      .map((res:any) => res.json());
          
       
   

  }


    public getFormateurs(): Observable<any> {
    return this.http.get("http://localhost:3000/api/formateurs")
    
      .map((res:any) => {
         
           if(res){
          return res.json();

        }
        
        }
      );

  }

}
