import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {AdminService} from "../../services/admin.service";
import {Organization} from "../../models/Organization";

@Component({
  selector: 'app-organization-management',
  templateUrl: './organization-management.component.html',
  styleUrls: ['./organization-management.component.css']
})
export class OrganizationManagementComponent implements OnInit{

  constructor(private adminService:AdminService) {
  }

  organizations:Organization[] = [];

  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.helpAnnouncementHeader;
  title = "Organizations";

  ngOnInit() {
    this.getOrganizations();
  }

  getOrganizations(){
    this.adminService.getOrganizations().subscribe(
        data =>{
          this.organizations=data;
        }
    )
  }
}
