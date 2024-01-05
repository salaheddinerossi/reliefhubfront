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

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"announcements/:announcementId",component:AnnouncementsDisasterComponent},
  {path:"announcement/:announcementId",component:AnnouncementPageComponent},
  {path:"help/:targetId",component:HelpFormComponent},
  {path:"relief",component:ReliefRequestComponent},
  {path:"declaration",component:DeclarationComponent},
  {path:"login",component:OrganizationLoginComponent},
  {path:"admin/login",component:AdminLoginComponent},
  {path:"register",component:OrganizationRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
