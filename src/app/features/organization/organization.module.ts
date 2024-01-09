import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOrganizationComponent } from './pages/home-organization/home-organization.component';
import {SharedModule} from "../../shared/shared.module";
import { AnnouncementsReliefRequestsComponent } from './pages/announcements-releief-requests/announcements-releief-requests.component';
import {RouterLink} from "@angular/router";
import { CreateAnnouncementComponent } from './pages/create-announcement/create-announcement.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrganizationAnnouncementsComponent } from './pages/organization-announcements/organization-announcements.component';
import { AnnouncementActionsComponent } from './pages/announcement-actions/announcement-actions.component';
import { ReliefRequestPageComponent } from './pages/relief-request-page/relief-request-page.component';



@NgModule({
  declarations: [
    HomeOrganizationComponent,
    AnnouncementsReliefRequestsComponent,
    CreateAnnouncementComponent,
    OrganizationAnnouncementsComponent,
    AnnouncementActionsComponent,
    ReliefRequestPageComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterLink,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class OrganizationModule { }
