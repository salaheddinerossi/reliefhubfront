import { Component } from '@angular/core';
import {environment} from "../../../../../environment";
import {DisasterServiceService} from "../../../submit-help/services/disater-service.service";
import {Disaster} from "../../../../models/Disaster";

@Component({
  selector: 'app-home-organization',
  templateUrl: './home-organization.component.html',
  styleUrls: ['./home-organization.component.css']
})
export class HomeOrganizationComponent {

  constructor(private disasterService:DisasterServiceService) {
  }

  disasters:Disaster[] = [];


  organizationNavLinks=environment.organizationNavLinks;
  organizationZoneText=environment.organizationZoneText;
  mapText=environment.mapText;


  ngOnInit(){
    this.getDisasters();

  }

  getDisasters(){
    this.disasterService.getDisasters().subscribe(
      data => {
        this.disasters = data
      }
    );
  }


}
