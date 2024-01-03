import {AfterViewInit, Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {AnnouncementService} from "../../services/announcement.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AnnouncementPublic} from "../../mdoles/AnnouncementPublic";
import * as L from "leaflet";


const customIcon = L.icon({
  iconUrl: 'assets/icons/pins/redpin.png',
  iconSize: [30, 30], // Square size (width, height)
  iconAnchor: [15, 30], // Adjust if needed
  popupAnchor: [0, -15] // Adjust if needed

});


@Component({
  selector: 'app-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.css']
})


export class AnnouncementPageComponent implements OnInit , AfterViewInit {

  private map!: L.Map;


  announcement:AnnouncementPublic={
    id:0,
    title:"",
    description:"",
    image:"",
    departPoint:{
      longitude:0,
      latitude:0
    },
    arrivePoint:{
      longitude:0,
      latitude:0,
    },
    organizationName:"",
    organizationEmail:"",
    targets: []
  };

  constructor(private announcementService:AnnouncementService,private route:ActivatedRoute,private router:Router) {
  }
  ngOnInit(): void {
    const announcementId = this.route.snapshot.paramMap.get('announcementId');
    if(announcementId){
      this.getAnnouncementById(announcementId);
    }

  }



  title=environment.helpAnnouncementHeader.title2
  defaultNavLinks = environment.defaultNavLinks;
  headerData=environment.helpAnnouncementHeader;



  private initMap(): void {
    this.map = L.map('map', {
      center: [0, 0],
      zoom: 2
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap(); // Initialize the map after the view is initialized
  }



  private updateMap(): void {
    // Clear any existing markers
    this.map.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        layer.remove();
      }
    });

    // Add markers for depart and arrive points
    if (this.announcement.departPoint && this.announcement.arrivePoint) {
      const departMarker = L.marker(
        [this.announcement.departPoint.latitude, this.announcement.departPoint.longitude],
        { icon: customIcon }
      ).bindPopup("depart point")
        .addTo(this.map)
        .openPopup();

      const arriveMarker = L.marker(
        [this.announcement.arrivePoint.latitude, this.announcement.arrivePoint.longitude],
        { icon: customIcon }
        ).bindPopup("Arrive point")
        .addTo(this.map)
        .openPopup();
      const group = L.featureGroup([departMarker, arriveMarker]);
      this.map.fitBounds(group.getBounds());
    }
  }

  getAnnouncementById(id: string) {
    this.announcementService.getAnnouncementById(id).subscribe(data => {
      this.announcement = data;
      this.updateMap();
      console.log(this.announcement);
    });
  }

  navigateTo(id: number) {
    this.router.navigate([`/help/${id}`]);
  }

}
