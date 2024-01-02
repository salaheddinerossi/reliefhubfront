import {Component, Input} from '@angular/core';
import {PointDto} from "../../../models/PointDto";
import * as L from 'leaflet';

const customIcon = L.icon({
  iconUrl: 'assets/icons/pins/redpin.png',
  iconSize: [30, 30], // Square size (width, height)
  iconAnchor: [15, 30], // Adjust if needed
  popupAnchor: [0, -15] // Adjust if needed

});


@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})



export class WorldMapComponent {



  private map!: L.Map;

  @Input() title:string = "";
  @Input() subtitle:string = "";
  @Input() additionalSubtitle = ""

  @Input() points: PointDto[] = [
    { latitude: 51.5, longitude: -0.09, link: 'https://example.com/disaster/1', disasterId: 1 ,name:"hello"},
    { latitude: 48.8566, longitude: 2.3522, link: 'https://example.com/disaster/2', disasterId: 2,name:"hello" }
  ];

  ngOnInit() {
    this.initMap();
  }



  private initMap(): void {
    this.map = L.map('map').setView([0,0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.points.forEach(point => {
      L.marker([point.latitude, point.longitude],{ icon: customIcon })
        .addTo(this.map)
        .bindPopup(`<a href="${point.link}" target="_blank"> ${point.name}</a>`);
    });
  }



}
