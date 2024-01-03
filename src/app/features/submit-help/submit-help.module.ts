import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {SharedModule} from "../../shared/shared.module";
import { AnnouncementsDisasterComponent } from './pages/announcements-disaster/announcements-disaster.component';
import { AnnouncementPageComponent } from './pages/announcement-page/announcement-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AnnouncementsDisasterComponent,
    AnnouncementPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SubmitHelpModule {


}
