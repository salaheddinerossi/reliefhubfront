import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/api/api.service";
import {Observable} from "rxjs";
import {DisasterZone} from "../models/DisasterZone";
import {map} from "rxjs/operators";
import {ReliefRequest} from "../models/ReliefRequest";

@Injectable({
  providedIn: 'root'
})
export class ReliefRequestService {

  constructor(private api:ApiService) { }

  getDisasterWithZones(): Observable<DisasterZone[]> {
    return this.api.get<any[]>('/disaster/disaster/mainzones').pipe(
      map(data => data.map(item => ({
        disasterId: item.id,
        disasterName: item.name,
        polygon: item.geometry.coordinates.map((coord: [number, number]) => ({
          latitude: coord[1],
          longitude: coord[0],
        }))
      })))
    );
  }

  submitHelpRequest(reliefRequest:ReliefRequest){
    this.api.post("assistancerequest/",reliefRequest).subscribe(
      response => console.log(response),
      error => console.error(error)
    )
  }


}
