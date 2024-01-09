import {AfterViewInit, Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {ReliefRequest} from "../../models/ReliefRequest";
import {ReliefRequestService} from "../../services/relief-request.service";
import {DisasterZone} from "../../models/DisasterZone";
import * as L from 'leaflet';
import {PointDto} from "../../../../models/PointDto";

const customIcon = L.icon({
  iconUrl: 'assets/icons/pins/redpin.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -15]

});


@Component({
  selector: 'app-relief-request',
  templateUrl: './relief-request.component.html',
  styleUrls: ['./relief-request.component.css']
})
export class ReliefRequestComponent implements OnInit,AfterViewInit {

  constructor(private reliefRequestService:ReliefRequestService) {
  }

  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.form3;
  title="Relief request"

  private map!: L.Map;
  private marker!: L.Marker;
  private defaultLat: number = 0; // Set these according to your requirements
  private defaultLng: number = 0;
  private defaultZoom: number = 2;
  private currentPolygon: L.Polygon | null = null;



  reliefRequest:ReliefRequest={
    fullname:"",
    phone:"",
    disasterId:0,
    address:"",
    expressNeeds:"",
    localisation:{
      latitude:0,
      longitude:0
    }
  }

  emptyReliefRequest={
    fullname:"",
    phone:"",
    disasterId:0,
    address:"",
    expressNeeds:"",
    localisation:{
      latitude:0,
      longitude:0
    }

  }

  disasterOptions: {label: string, value: any}[] = [];
  disasterZones:DisasterZone[]=[];
  selectPlaceHolder = "select a disaster";
  ngOnInit(): void {

    this.getDisasterZones();
    this.reliefRequestService.getDisasterWithZones().subscribe(disasterZones => {
      this.disasterOptions = disasterZones.map(zone => ({
        label: zone.disasterName,
        value: zone.disasterId
      }));
    });

  }

  getDisasterZones(){
    this.reliefRequestService.getDisasterWithZones().subscribe(
      data => {
        this.disasterZones = data;
        console.log(data)

      }
    )
  }


  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([this.defaultLat, this.defaultLng], this.defaultZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.map.on('click', (e) => this.onMapClick(e));
  }

  private onMapClick(e: L.LeafletMouseEvent): void {
    if (this.currentPolygon && this.currentPolygon.getBounds().contains(e.latlng)) {
      if (this.marker) {
        this.marker.remove();
      }
      this.marker = L.marker(e.latlng, { icon: customIcon }).addTo(this.map);
      this.reliefRequest.localisation = {
        latitude: e.latlng.lat,
        longitude: e.latlng.lng
      };
    } else {
      alert("Please place the marker within the selected disaster zone.");
    }
  }



  onDisasterSelected(disasterId: number): void {
    this.reliefRequest.disasterId = disasterId;

    if (disasterId === 0) {
      this.map.setView([this.defaultLat, this.defaultLng], this.defaultZoom);
    } else {
      const selectedZone = this.disasterZones.find(zone => zone.disasterId === disasterId);
      if (selectedZone) {
        this.displayPolygon(selectedZone.polygon);
      }
    }
  }

  private displayPolygon(polygonPoints: PointDto[]): void {
    // Remove the existing polygon if it exists
    if (this.currentPolygon) {
      this.currentPolygon.remove();
      this.currentPolygon = null;
    }

    const latLngs = polygonPoints.map(point => new L.LatLng(point.latitude, point.longitude));
    const polygon = L.polygon(latLngs, { color: 'red' });
    polygon.addTo(this.map);
    this.map.fitBounds(polygon.getBounds());

    this.currentPolygon = polygon;
  }


  onSubmit() {
    console.log(this.reliefRequest)
    this.reliefRequestService.submitHelpRequest(this.reliefRequest).subscribe(
      response => {
          this.reliefRequest=this.emptyReliefRequest;
          alert("relief request submited")
      },
      error => {
        this.reliefRequest=this.emptyReliefRequest;
        alert("relief request submited")

      }
    )

  }
}
