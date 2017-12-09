import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {SessionService} from "./services/session.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [


  ],
  providers:[SessionService]
})
export class CoreModule { }
