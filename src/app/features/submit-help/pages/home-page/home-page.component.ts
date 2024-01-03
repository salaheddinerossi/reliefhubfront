import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {DisasterServiceService} from "../../services/disater-service.service";
import {Disaster} from "../../../../models/Disaster";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  implements OnInit{
  mapText=environment.mapText;
  disasters:Disaster[] = [];
  constructor(private disasterService:DisasterServiceService) {
  }

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
