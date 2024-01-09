import { Component } from '@angular/core';
import {environment} from "../../../../../environment";
import {DisasterServiceService} from "../../../submit-help/services/disater-service.service";
import {Disaster} from "../../../../models/Disaster";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  constructor(private disasterService:DisasterServiceService) {
  }

  disasters:Disaster[] = [];



  organizationNavLinks=environment.adminNavLinks;
  organizationZoneText=environment.adminZoneText;
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
