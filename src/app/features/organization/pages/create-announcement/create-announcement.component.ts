import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {ActivatedRoute} from "@angular/router";
import {OrganizationService} from "../../services/organization.service";
import {DisasterName} from "../../models/DisasterName";
import {Authorization} from "../../models/Authorization";
import {ZonePolygon} from "../../models/ZonePolygon";
import {DisasterPolygon} from "../../models/DisasterPolygon";
import * as L from 'leaflet';
import {AnnouncementForm} from "../../models/AnnouncementForm";
import {PointDto} from "../../../../models/PointDto";
import * as geolib from 'geolib';
import {NumberToStringPipe} from "../../../../pipes/number-to-string.pipe";
import {FileUploadService} from "../../../../core/file-services/file-upload.service";

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css']
})
export class CreateAnnouncementComponent implements OnInit{

  private map!: L.Map;
  private zoneLayerGroup!: L.LayerGroup;

  private departMap!: L.Map;
  private departPointMarker?: L.Marker;


  authorizationOptions: { label: string, value: any }[] = [];
  disasterOptions: { label: string, value: any }[] = [];
  zoneOptions: { label: string, value: any }[] = [];

  selectedAuthorization: any = null;
  selectedDisaster: any = null;
  selectedZone: any = null;


  disasterNames:DisasterName[]= []
  authorizations :Authorization[]= [];

  headerData = environment.helpAnnouncementHeader;
  organizationNavLinks=environment.organizationNavLinks;


  selectedFile: File | null = null;

  constructor(private route:ActivatedRoute,private organizationService:OrganizationService,private fileUploadService:FileUploadService) {
  }

  disasterPolygon:DisasterPolygon={
    name:"",
    mainZone:[],
    zones:[]
  }

  selectedZonePolygon:ZonePolygon={
    name:"",
    id:0,
    geometry:[]

  }
    emptyPoint:PointDto={
        latitude:0,
        longitude:0
    }


    emptyAnnouncementForm:AnnouncementForm={
      title:'',
      description:'',
      departPoint:this.emptyPoint,
      arrivePoint:this.emptyPoint,
      image:'',
      zone_id:0,
      authorization_id:0,
      targetsDto: [
        { name: '', currentValue: 0, targetValue: 0 }
      ],

  }

  announcementForm=this.emptyAnnouncementForm;

    arrivePointMarker?: L.Marker;



  title = "Create an announcement";

  ngOnInit() {

    const disasterId = this.route.snapshot.paramMap.get('disasterId');
    if (disasterId) {
      //this.getDisasterById(disasterId);
    }

    this.getDisastersName();
    this.getAuthorizations();

    this.initializeMap();
    this.initializeDepartMap();

  }

  numberToStringPipe = new NumberToStringPipe();


  updateTargetValue(index: number, value: string): void {
    this.announcementForm.targetsDto[index].targetValue = this.numberToStringPipe.parse(value);
  }


  addTargetForm() {
    this.announcementForm.targetsDto.push({ name: '', currentValue: 0, targetValue: 0 });
  }

  removeTargetForm(index: number) {
    if (this.announcementForm.targetsDto.length > 1) {
      this.announcementForm.targetsDto.splice(index, 1);
    }
  }

  private initializeMap(): void {
    this.map = L.map('mapId').setView([0, 0], 1); // Set a default view
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.zoneLayerGroup = L.layerGroup().addTo(this.map);

      this.map.on('click', (event: L.LeafletMouseEvent) => {
          this.addMarker(event.latlng);
      });

  }

  private initializeDepartMap(): void {
    this.departMap = L.map('departMapId').setView([0, 0], 1);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.departMap);

    // Add click event listener for the departure map
    this.departMap.on('click', (event: L.LeafletMouseEvent) => {
      this.addDepartMarker(event.latlng);
    });
  }


  private addMarker(latlng: L.LatLng): void {

      const zoneCoordinates = this.selectedZonePolygon.geometry.map(point => ({
        latitude: point.latitude,
        longitude: point.longitude
      }));

      const isInside = geolib.isPointInPolygon(
          { latitude: latlng.lat, longitude: latlng.lng },
          zoneCoordinates
      );

      if (!isInside) {
        alert('You cannot add a marker outside the selected zone.');
        return;
      }

      if (this.arrivePointMarker) {
            this.map.removeLayer(this.arrivePointMarker);
        }

        // Create a new marker
        this.arrivePointMarker = L.marker(latlng).addTo(this.map);

        // Update the arrivePoint in announcementForm
        this.announcementForm.arrivePoint = {
            latitude: latlng.lat,
            longitude: latlng.lng
        };
    }

  private addDepartMarker(latlng: L.LatLng): void {
    // Remove any existing marker
    if (this.departPointMarker) {
      this.departMap.removeLayer(this.departPointMarker);
    }

    // Create a new marker for the departure point
    this.departPointMarker = L.marker(latlng).addTo(this.departMap);

    // Update the departPoint in announcementForm
    this.announcementForm.departPoint = {
      latitude: latlng.lat,
      longitude: latlng.lng
    };
  }




  getDisastersName() {
    this.organizationService.getDisastersNames().subscribe(data => {
      this.disasterNames = data;
      this.disasterOptions = [
        { label: 'select Disaster', value: null },
        ...data.map(disaster => ({ label: disaster.name, value: disaster.id }))
      ];
      // Set default value for disasters select input
      this.selectedDisaster = null;
    });
  }

  getAuthorizations() {
    this.organizationService.getAuthorizations().subscribe(data => {
      this.authorizations = data;
      this.authorizationOptions = [
        { label: 'select Authorization', value: null },
        ...data.map(auth => ({ label: auth.name, value: auth.id }))
      ];
      // Set default value for authorizations select input
      this.selectedAuthorization = null;
    });
  }

  loadNewDisaster(disasterId: string) {
    this.organizationService.getDisasterWithZones(disasterId).subscribe(data => {
      this.disasterPolygon = data;
      this.zoneOptions = [
        { label: 'select Zone', value: null },
        ...data.zones.map(zone => ({ label: zone.name, value: zone.id }))
      ];
      // Set default value for zones select input
      this.selectedZone = null;
    });
  }


  onZoneChange(zoneId: any) {
    this.selectedZone = zoneId;

    this.announcementForm.zone_id=zoneId;

    const selectedZone = this.disasterPolygon.zones.find(zone => zone.id === zoneId);

    if (selectedZone) {
      this.selectedZonePolygon = selectedZone;

      this.zoneLayerGroup.clearLayers();

      const zoneCoordinates: L.LatLngExpression[] = selectedZone.geometry.map(point => new L.LatLng(point.latitude, point.longitude));

      const zonePolygon = L.polygon(zoneCoordinates as L.LatLngTuple[], {
        color: 'blue',
        weight: 2
      }).addTo(this.zoneLayerGroup);

      this.map.fitBounds(zonePolygon.getBounds());
    }
  }

  onAuthorizationChange(authorizationId:number){
    this.announcementForm.authorization_id=authorizationId;
  }

  onDisasterChange(disasterId: any) {
    this.selectedDisaster = disasterId;
    this.selectedZone = null;
    this.zoneOptions = [];
    this.loadNewDisaster(disasterId);
  }

  onSubmit() {

    if(this.emptyAnnouncementForm.image!=""){
      this.createAnnouncement(this.announcementForm)

    }else {
      alert("the image is not uploaded yet");
    }


  }

  createAnnouncement(announcement:AnnouncementForm){
    this.organizationService.createAnnouncement(announcement).subscribe(
        response => {
          alert("announcement created")
          this.announcementForm=this.emptyAnnouncementForm
          console.log(response)
        },
        error => console.error(error)

    )
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.onUpload();
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.fileUploadService.uploadFileToSpaces(this.selectedFile).subscribe(
          fileUrl => {
            console.log('File uploaded successfully!', fileUrl);
            this.announcementForm.image = fileUrl;
          },
          error => {
            console.error('Error uploading file:', error);
          }
      );
    }
  }

}
