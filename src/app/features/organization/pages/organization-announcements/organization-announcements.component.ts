import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {Announcement} from "../../../../models/Announcement";
import {OrganizationService} from "../../services/organization.service";

@Component({
  selector: 'app-organization-announcements',
  templateUrl: './organization-announcements.component.html',
  styleUrls: ['./organization-announcements.component.css']
})
export class OrganizationAnnouncementsComponent implements OnInit{

  constructor(private organizationService:OrganizationService) {
  }

  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.helpAnnouncementHeader;
  title = "My announcements";

  announcements:Announcement[]=[];


  ngOnInit(): void {
    this.getAnnouncementsByOrganization();
  }

  getAnnouncementsByOrganization(){
    this.organizationService.getAnnouncementByOrganization().subscribe(
        data =>{
          this.announcements=data;
        }
    )
  }


}
