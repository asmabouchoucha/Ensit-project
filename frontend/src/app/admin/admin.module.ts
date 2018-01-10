import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';


import { FormsModule } from "@angular/forms";
import { SessionItemService } from "./session-item.service";
import { Routes, RouterModule } from "@angular/router";
import { SessionAddFormComponent } from "./session-add-form/session-add-form.component";
import { AdminSessionListComponent } from './admin-session-list/admin-session-list.component';
import { AdminSessionItemComponent } from './admin-session-item/admin-session-item.component';
import { SessionEditFormComponent } from "./session-edit-form/session-edit-form.component";
import { FormateursComponent } from "./formateurs/formateurs.component";
import { ParticipantsComponent } from "./participants/participants.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormateurDetailsComponent } from './formateurs/formateur-details/formateur-details.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [

      {
        path: 'add', component: SessionAddFormComponent
      },
      { path: 'adminlist', component: AdminSessionListComponent },

      { path: 'edit/:id', component: SessionEditFormComponent },
      { path: 'formateurs', component: FormateursComponent },
      { path: 'participants', component: ParticipantsComponent },
       { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
      { path: 'formateur/:id',component:FormateurDetailsComponent  }

    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    SessionAddFormComponent,
    AdminSessionListComponent,
    AdminSessionItemComponent,
    SessionEditFormComponent,
    FormateursComponent,
    ParticipantsComponent,
    DashboardComponent,
    FormateurDetailsComponent


  ],

  providers: [SessionItemService],


})
export class AdminModule { }
