import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/api/api.service";
import { Observable } from 'rxjs';
import {Disaster} from "../../../models/Disaster";
import {map} from "rxjs/operators";
import {PointDto} from "../../../models/PointDto";

@Injectable({
  providedIn: 'root'
})
export class DisasterServiceService {

  constructor(private api:ApiService) {}

  getDisasters(): Observable<Disaster[]> {
    return this.api.get<any[]>('/disaster/disaster/').pipe(
        map(data => data.map(item => ({
          link: `/announcements/${item.id}`,
          name: item.name,
          center: {
            latitude: item.center.latitude,
            longitude: item.center.longitude
          } as PointDto
        })) as Disaster[])
    );
  }

    getDisastersForOrganizations(): Observable<Disaster[]> {
        return this.api.get<any[]>('/disaster/disaster/').pipe(
            map(data => data.map(item => ({
                link: `/organization/announcements/${item.id}`,
                name: item.name,
                center: {
                    latitude: item.center.latitude,
                    longitude: item.center.longitude
                } as PointDto
            })) as Disaster[])
        );
    }

}
