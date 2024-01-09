import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./features/submit-help/pages/home-page/home-page.component";
import {
  AnnouncementsDisasterComponent
} from "./features/submit-help/pages/announcements-disaster/announcements-disaster.component";
import {AnnouncementPageComponent} from "./features/submit-help/pages/announcement-page/announcement-page.component";
import {HelpFormComponent} from "./features/forms/pages/help-form/help-form.component";
import {ReliefRequestComponent} from "./features/forms/pages/relief-request/relief-request.component";
import {DeclarationComponent} from "./features/forms/pages/declaration/declaration.component";
import {
  OrganizationLoginComponent
} from "./features/authentication/pages/organization-login/organization-login.component";
import {AdminLoginComponent} from "./features/authentication/pages/admin-login/admin-login.component";
import {
  OrganizationRegisterComponent
} from "./features/authentication/pages/organization-register/organization-register.component";
import {HomeOrganizationComponent} from "./features/organization/pages/home-organization/home-organization.component";
import {
  adminGuard,
  generalUserGuard,
  organizationGuard
} from "./core/authentication/authentication.guard";
import {
  AnnouncementsReliefRequestsComponent
} from "./features/organization/pages/announcements-releief-requests/announcements-releief-requests.component";
import {
  CreateAnnouncementComponent
} from "./features/organization/pages/create-announcement/create-announcement.component";
import {
  OrganizationAnnouncementsComponent
} from "./features/organization/pages/organization-announcements/organization-announcements.component";
import {
  AnnouncementActionsComponent
} from "./features/organization/pages/announcement-actions/announcement-actions.component";
import {AdminHomeComponent} from "./features/admin/pages/admin-home/admin-home.component";
import {DisasterCreationComponent} from "./features/admin/pages/disaster-creation/disaster-creation.component";
import {AdminDeclarationComponent} from "./features/admin/pages/admin-declaration/admin-declaration.component";
import {DeclarationPageComponent} from "./features/admin/pages/declaration-page/declaration-page.component";
import {
  OrganizationManagementComponent
} from "./features/admin/pages/organization-management/organization-management.component";
import {OrganizationDetailsComponent} from "./features/admin/pages/organization-details/organization-details.component";
import {
  ReliefRequestPageComponent
} from "./features/organization/pages/relief-request-page/relief-request-page.component";
import {LogoutComponent} from "./features/forms/pages/logout/logout.component";

const routes: Routes = [
  {path:"",component:HomePageComponent,canActivate:[generalUserGuard]},
  {path:"announcements/:announcementId",component:AnnouncementsDisasterComponent},
  {path:"announcement/:announcementId",component:AnnouncementPageComponent},
  {path:"help/:targetId",component:HelpFormComponent},
  {path:"relief",component:ReliefRequestComponent},
  {path:"declaration",component:DeclarationComponent},
  {path:"login",component:OrganizationLoginComponent,canActivate:[generalUserGuard]},
  {path:"admin/login",component:AdminLoginComponent,canActivate:[generalUserGuard]},
  {path:"register",component:OrganizationRegisterComponent,canActivate:[generalUserGuard]},
  {path:"organization",canActivate: [organizationGuard], component:HomeOrganizationComponent},
  {path:"organization/announcements/:disasterId",canActivate: [organizationGuard], component:AnnouncementsReliefRequestsComponent},
  {path:"organization/create-announcement",canActivate: [organizationGuard], component:CreateAnnouncementComponent},
  {path:"organization/create-announcement:disaterId",canActivate: [organizationGuard], component:CreateAnnouncementComponent},
  {path:"organization/profile",canActivate:[organizationGuard],component:OrganizationAnnouncementsComponent},
  {path:"organization/profile/:announcementId",canActivate:[organizationGuard],component:AnnouncementActionsComponent},
  {path:"organization/relief-request/:reliefRequestId",canActivate:[organizationGuard],component:ReliefRequestPageComponent},
  {path:"admin",canActivate:[adminGuard],component:AdminHomeComponent},
  {path:"admin/create-disaster",canActivate:[adminGuard],component:DisasterCreationComponent},
  {path:"admin/declarations",canActivate:[adminGuard],component:AdminDeclarationComponent},
  {path:"admin/declarations/:declarationId",canActivate:[adminGuard],component:DeclarationPageComponent},
  {path:"admin/organizations",canActivate:[adminGuard],component:OrganizationManagementComponent},
  {path:"admin/organizations/:organizationId",canActivate:[adminGuard],component:OrganizationDetailsComponent},
  {path:"logout",component:LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
