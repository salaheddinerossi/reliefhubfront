import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {ActivatedRoute} from "@angular/router";
import {OrganizationService} from "../../services/organization.service";
import {DisasterAnnouncements} from "../../models/DisasterAnnouncements";
import * as L from 'leaflet';


@Component({
  selector: 'app-announcements-releief-requests',
  templateUrl: './announcements-releief-requests.component.html',
  styleUrls: ['./announcements-releief-requests.component.css']
})


export class AnnouncementsReliefRequestsComponent implements OnInit{


  selectOptions: {label: string, value: any}[] = [];
  defaultSelectedValue = 0;
  selectedZoneState: DisasterAnnouncements={
    name:"",
    mainZone:[],
    zoneObjects:[]
  };



  private map!: L.Map;
  private zoneLayerGroup!: L.LayerGroup;


  headerData = environment.organization1;
  organizationNavLinks=environment.organizationNavLinks;



  title = "";

  disasterAnnouncement:DisasterAnnouncements={
    name:"",
    mainZone:[],
    zoneObjects:[]
  }

  constructor( private route: ActivatedRoute,private organizationService:OrganizationService) {
  }

  ngOnInit() {
    const disasterId = this.route.snapshot.paramMap.get('disasterId');
    if (disasterId) {
      this.getDisasterById(disasterId);
    }

    this.initializeMap();
  }



  private initializeMap(): void {
    this.map = L.map('mapId', {
      center: [0, 0], // This will be updated once we get the main zone bounds
      zoom: 13
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.zoneLayerGroup = L.layerGroup().addTo(this.map);
  }

  private addZonesToMap(disasterData: DisasterAnnouncements): void {
    this.zoneLayerGroup.clearLayers();

    const mainZoneLatLngs = disasterData.mainZone.map(point => L.latLng(point.latitude, point.longitude));
    const mainZonePolygon = L.polygon(mainZoneLatLngs, { color: 'blue' }).addTo(this.zoneLayerGroup);

    this.map.fitBounds(mainZonePolygon.getBounds());

    disasterData.zoneObjects.forEach(zone => {
      const zoneLatLngs = zone.geometry.map(point => L.latLng(point.latitude, point.longitude));
      L.polygon(zoneLatLngs, {
        color: 'green',
        fillColor: '#0f0',
        fillOpacity: 0.5
      }).bindPopup(zone.name).addTo(this.zoneLayerGroup);
    });



    disasterData.zoneObjects.forEach(zone => {
      zone.announcementObjects.forEach(announcement => {
        const arriveLatLng = L.latLng(announcement.arrivePoint.latitude, announcement.arrivePoint.longitude);

        let markerIcon;
        switch (announcement.status) {
          case 'ACTIVE':
            markerIcon = L.icon({ iconUrl: 'assets/icons/pins/active.png', iconSize: [25, 25], iconAnchor: [15, 30] });
            break;
          case 'COMPLETED':
            markerIcon = L.icon({ iconUrl: 'assets/icons/pins/done.png', iconSize: [25, 25], iconAnchor: [15, 30] });
            break;
          case 'INROAD':
            markerIcon = L.icon({ iconUrl: 'assets/icons/pins/inroad.png', iconSize: [25, 25], iconAnchor: [15, 30] });
            break;
          default:
            markerIcon = L.icon({ iconUrl: 'assets/icons/pins/redpin.png', iconSize: [25, 25], iconAnchor: [15, 30] });
        }

        L.marker(arriveLatLng, { icon: markerIcon })
          .bindPopup(`Announcement: ${announcement.title}`)
          .addTo(this.zoneLayerGroup);
      });
    });

    disasterData.zoneObjects.forEach(zone => {
      zone.assistantRequestsObjects.forEach(request => {
        const requestLatLng = L.latLng(request.localisation.latitude, request.localisation.longitude);

        const requestIcon = L.icon({
          iconUrl: 'assets/icons/pins/assistancerequest.png',
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -15]

        });

        // Create a marker with the custom icon
        const requestMarker = L.marker(requestLatLng, { icon: requestIcon })
          .bindPopup(`Assistance Request: ${request.expressNeeds}`)
          .addTo(this.zoneLayerGroup);
      });
    });

  }

  onSelectChange(selectedZoneId: number): void {
    if (selectedZoneId == 0) {
      this.selectedZoneState = this.disasterAnnouncement;
      this.addZonesToMap(this.disasterAnnouncement);
    } else {
      this.selectedZoneState = {
        name: this.disasterAnnouncement.name,
        mainZone: this.disasterAnnouncement.mainZone,
        zoneObjects: this.disasterAnnouncement.zoneObjects.filter(zone => zone.id == selectedZoneId)
      };
      this.addZonesToMap(this.selectedZoneState);
    }
  }


  getDisasterById(disasterId: string) {
    this.organizationService.getDisasterById(disasterId).subscribe(
      data => {
        this.disasterAnnouncement = data;
        this.title = this.disasterAnnouncement.name;
        this.addZonesToMap(this.disasterAnnouncement);
        this.selectedZoneState=this.disasterAnnouncement;
        this.initializeSelectOptions(data);

      },
      error => {
        console.error('Error fetching disaster data:', error);
      }
    );
  }

  private initializeSelectOptions(disasterData: DisasterAnnouncements): void {
    this.selectOptions = [{ label: 'All', value: 0 }];
    disasterData.zoneObjects.forEach(zone => {
      this.selectOptions.push({ label: zone.name, value: zone.id });
    });
  }



}
