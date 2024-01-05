import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { environment } from '../../../../../environment';
import { Declaration } from '../../../../models/Declaration';
import {DeclarationService} from "../../services/declaration.service";

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {

  constructor(private declarationService:DeclarationService) {
  }

  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.helpAnnouncementHeader;
  title = "declare a disaster";

  declaration: Declaration = {
    fullName: "",
    phoneNumber: "",
    address: "",
    description: "",
    localisation: {
      latitude: 0,
      longitude: 0
    }
  };

  private map!: L.Map;
  private marker!: L.Marker;

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.map.on('click', (e) => this.onMapClick(e));
  }

  private onMapClick(e: L.LeafletMouseEvent): void {
    if (this.marker) {
      this.marker.remove();
    }

    // Set custom icon here if needed
    const customIcon = L.icon({
      iconUrl: 'assets/icons/pins/redpin.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -15]
    });

    this.marker = L.marker(e.latlng, { icon: customIcon }).addTo(this.map);

    // Update declaration localisation
    this.declaration.localisation.latitude = e.latlng.lat;
    this.declaration.localisation.longitude = e.latlng.lng;
  }

  onSubmit() {
    this.declarationService.createDeclaration(this.declaration);
  }
}
