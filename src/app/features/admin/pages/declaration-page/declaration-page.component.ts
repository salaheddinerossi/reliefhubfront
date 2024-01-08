import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {environment} from "../../../../../environment";
import {AdminDeclaration} from "../../models/AdminDeclaration";
import {ActivatedRoute, Router} from "@angular/router";
import * as L from 'leaflet';


@Component({
  selector: 'app-declaration-page',
  templateUrl: './declaration-page.component.html',
  styleUrls: ['./declaration-page.component.css']
})
export class DeclarationPageComponent implements OnInit,AfterViewInit {

  private map!: L.Map;
  private marker!: L.Marker;
  private customIcon!: L.Icon;


  constructor(private adminService:AdminService,private route:ActivatedRoute,private router:Router) {
  }


  emptyDeclaration:AdminDeclaration={
    id:0,
    fullName: "",
    phoneNumber: "",
    address: "",
    description: "",
    localisation: {
      latitude: 0,
      longitude: 0
    },
    isArchived:false
  }

  declaration=this.emptyDeclaration;


  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.helpAnnouncementHeader;
  title = "Review a declaration";


  ngOnInit() {
    const declarationId = this.route.snapshot.paramMap.get('declarationId');
    if (declarationId) {
      this.getDeclaration(declarationId);
    }

  }

  ngAfterViewInit(): void {
  }

  private initMap(): void {

    this.customIcon = L.icon({
      iconUrl: 'assets/icons/pins/redpin.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -15]
    });

    this.map = L.map('map').setView([this.declaration.localisation.latitude, this.declaration.localisation.longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.marker = L.marker(
        [this.declaration.localisation.latitude, this.declaration.localisation.longitude],
        {icon: this.customIcon}
    ).addTo(this.map);
  }

  getDeclaration(id:string){
    this.adminService.getDeclaration(id).subscribe(
        data => {
          this.declaration=data;
          this.title="declaration from " + this.declaration.fullName
          console.log(this.declaration)
          this.initMap();
        }


    )
  }

  archive(id: number) {
    this.adminService.archiveDeclaration(id).subscribe(response =>{
      this.router.navigate(['/admin/declarations'])
    });
  }
}
