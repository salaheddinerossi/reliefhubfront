import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./features/submit-help/pages/home-page/home-page.component";
import {
  AnnouncementsDisasterComponent
} from "./features/submit-help/pages/announcements-disaster/announcements-disaster.component";
import {AnnouncementPageComponent} from "./features/submit-help/pages/announcement-page/announcement-page.component";

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"announcements/:announcementId",component:AnnouncementsDisasterComponent},
  {path:"announcement/:announcementId",component:AnnouncementPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
