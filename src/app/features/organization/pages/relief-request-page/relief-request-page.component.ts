import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {OrganizationService} from "../../services/organization.service";
import {ReliefRequest} from "../../models/ReliefRequest";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-relief-request-page',
  templateUrl: './relief-request-page.component.html',
  styleUrls: ['./relief-request-page.component.css']
})
export class ReliefRequestPageComponent implements OnInit{

  constructor(private organizationService:OrganizationService,private route:ActivatedRoute) {
  }


  reliefRequest:ReliefRequest={
    id:0,
    fullname:"",
    phone:"",
    address:"",
    expressNeeds:""
  }

  ngOnInit() {
    const reliefRequestId = this.route.snapshot.paramMap.get('reliefRequestId');
    if (reliefRequestId) {
      this.getReliefRequestById(reliefRequestId);
    }

  }

  headerData = environment.helpAnnouncementHeader;
  organizationNavLinks=environment.organizationNavLinks;

  title = "Infromations:";


  getReliefRequestById(id:string){
    this.organizationService.getReliefRequest(id).subscribe(
      data =>{
        this.reliefRequest=data;
        console.log(this.reliefRequest)
      }
    );
  }

}
