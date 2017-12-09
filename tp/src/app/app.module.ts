import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirectiveDirective } from './inscription-disabled-directive.directive';
export { SessionItemListComponent };
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AdminComponent } from './admin/admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from "@angular/router";
import { AdminModule } from "./admin/admin.module";
import {SessionService} from "./core/services/session.service";
import {CoreModule} from "./core/core.module";
import {ToastrModule} from "ngx-toastr";


const appRoutes: Routes = [
  {
    path: 'list',
    component: SessionItemListComponent
  },

  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {
    path: '', redirectTo: '/list', pathMatch: 'full'
  },
  //{
    //path: '**', component: PageNotFoundComponent
  //}
]
@NgModule({
  declarations: [
    AppComponent,

    SessionItemComponent,

    SessionItemListComponent,

    InscriptionDisabledDirectiveDirective,

    PageNotFoundComponent,

   

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    ),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      closeButton:true,
      progressBar:true,
    }),
    CoreModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
