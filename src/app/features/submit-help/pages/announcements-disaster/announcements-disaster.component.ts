import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {ActivatedRoute} from "@angular/router";
import {AnnouncementService} from "../../services/announcement.service";
import {Announcement} from "../../../../models/Announcement";

@Component({
  selector: 'app-announcements-disaster',
  templateUrl: './announcements-disaster.component.html',
  styleUrls: ['./announcements-disaster.component.css']
})
export class AnnouncementsDisasterComponent implements OnInit {

  announcements:Announcement[]=[];
  filteredAnnouncements: Announcement[] = [];

  constructor(private route: ActivatedRoute,private announcementService:AnnouncementService) {
  }
  title=environment.helpAnnouncementHeader.title2
  defaultNavLinks = environment.defaultNavLinks;
  headerData=environment.helpAnnouncementHeader;

  selectOptions =environment.authorizationSelect;
  defaultSelectedValue = 100;


  ngOnInit(): void {
    const announcementId = this.route.snapshot.paramMap.get('announcementId');
    if(announcementId){
      this.getAnnouncementByDisasterId(announcementId);
    }
  }

  getAnnouncementByDisasterId(id:string){
    this.announcementService.getAnnouncementsByDisasterId(id).subscribe(
      data =>{
        this.announcements=data;
        this.filteredAnnouncements=this.announcements;
      }
    )
  }

  onSelectChange(selectedValue: any): void {
    if (selectedValue == 100) {
      console.log(selectedValue)
      this.filteredAnnouncements = this.announcements;
    } else {
      this.filteredAnnouncements = this.announcements.filter(announcement => announcement.authorization_id == selectedValue);
    }
  }



}
