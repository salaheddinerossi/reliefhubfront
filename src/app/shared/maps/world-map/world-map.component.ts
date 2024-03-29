import {Component, Input, NgZone, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {Disaster} from "../../../models/Disaster";
import {Router} from "@angular/router";

const customIcon = L.icon({
  iconUrl: 'assets/icons/pins/redpin.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -15]

});


@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})



export class WorldMapComponent implements OnInit{

  constructor(private router:Router,private zone:NgZone) {
  }

  private map!: L.Map;

  @Input() mapText={title:"",subTitle: "",additionalSubtitle: ""}
  @Input() disasters:Disaster[]=[];

  ngOnInit() {
    this.initMap();
    console.log(this.disasters)
  }

  private initMap(): void {
    this.map = L.map('map').setView([0,0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.disasters.forEach(disaster => {
      L.marker([disaster.center.latitude, disaster.center.longitude],{ icon: customIcon })
        .addTo(this.map)
        .on('click', () => {
        this.zone.run(() => this.router.navigate([disaster.link]));

      });
    });
  }



}
