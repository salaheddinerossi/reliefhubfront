import { Component } from '@angular/core';
import {environment} from "../../../../../environment";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  organizationNavLinks=environment.organizationNavLinks;
  organizationZoneText=environment.organizationZoneText;
  mapText=environment.mapText;

}
