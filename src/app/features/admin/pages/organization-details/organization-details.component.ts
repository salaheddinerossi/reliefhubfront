import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {environment} from "../../../../../environment";
import {Organization} from "../../models/Organization";
import {ActivatedRoute, Router} from "@angular/router";
import {Authorization} from "../../models/Authorization";
import {OrganizationAuthorization} from "../../models/organizationAuthorization";

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css']
})
export class OrganizationDetailsComponent implements OnInit{

  constructor(private adminService:AdminService,private route:ActivatedRoute,private router:Router) {
  }

  organization:Organization={
    id:0,
    name:"",
    address:"",
    email:"",
    password:"",
    description:"",
    documents:"",


  }

  organizationAuthorizations:number[]=[];



  defaultNavLinks = environment.adminNavLinks;
  headerData = environment.admin3;
  title = "Organization Details";

  isActiveOptions = [
    { label: 'Active', value: true },
    { label: 'Inactive', value: false }
  ];

  authorizations:Authorization[]=[];

  ngOnInit(){

    const organizationId = this.route.snapshot.paramMap.get('organizationId');
    if (organizationId) {
      this.getOrganization(organizationId);

    }
    this.getAuthorizations();
  }

  getOrganization(id:string){
    this.adminService.getOrganization(id).subscribe(
        data =>{
          this.organization=data;
          this.getOrganizationsAuthorizations(data.id);
          this.organizationAuthorization.organization_id=data.id;
        }
    )
  }



  onActiveStateChange(newState: string) {

    if (newState==="true") {
      this.activateOrganization(this.organization.id);
    } else {
      this.refuseOrganization(this.organization.id);
    }
  }

  activateOrganization(id:number) {
    this.adminService.activeOrganization(id).subscribe(
        response => {
          this.organization.isActive=true;
        }
    );
  }

  refuseOrganization(id:number) {
    this.adminService.deactivate(id).subscribe(
        response => {
          this.organization.isActive=false;
        }
    );
  }

  getAuthorizations(){
    this.adminService.getAuthorizations().subscribe(
        data => {
          this.authorizations=data;
        }
    );
  }

  getOrganizationsAuthorizations(id:number){
    this.adminService.getAuthorizationsByOrganization(id).subscribe(
        data =>{
          this.organizationAuthorizations=data
        }
    )
  }

  organizationAuthorization:OrganizationAuthorization={
    organization_id:0,
    authorization_id:0,
}

  linkAuthorization(id: number) {
    this.organizationAuthorization.authorization_id=id;
    this.adminService.addAuthorization(this.organizationAuthorization).subscribe(
        response => {
          this.reloadComponent();
        }
    )
  }

  reloadComponent() {
    const currentRoutePath = '/admin/organizations/'+this.organization.id;

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoutePath]);
    });
  }

}
