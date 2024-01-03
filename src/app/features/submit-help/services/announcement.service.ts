import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/api/api.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Announcement} from "../../../models/Announcement";
import {Target} from "../../../models/Target";
import {AnnouncementPublic} from "../mdoles/AnnouncementPublic";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private api:ApiService) { }

  getAnnouncementsByDisasterId(id:string): Observable<Announcement[]>{
    return this.api.get<any[]>(`announcement/announcements/disaster/${id}`).pipe(
        map(data => data.map(item => ({
          link: `/announcement/${item.id}`,
          image: item.image,
          title: item.title,
          description: item.description,
          authorization_name: item.authorizationResponse.name,
          authorization_id: item.authorizationResponse.id,
          disaster_name: item.disasterName,
          target_name: item.targetResponses.map((target:Target) => target.name)
        }) as Announcement))
    );
  }

    getAnnouncementById(id: string): Observable<AnnouncementPublic> {
        return this.api.get<any>(`announcement/announcements/${id}`).pipe(
            map(response => ({
                id: response.id,
                title: response.title,
                description: response.description,
                image: response.image,
                departPoint: {
                    latitude: response.departPoint.latitude,
                    longitude: response.departPoint.longitude
                },
                arrivePoint: {
                    latitude: response.arrivePoint.latitude,
                    longitude: response.arrivePoint.longitude
                },
                organizationName: response.organizationResponse.name,
                organizationEmail: response.organizationResponse.email,
                targets: response.targetResponses.map((target: any) => ({
                    id: target.id,
                    name: target.name,
                    currentValue: target.currentValue,
                    targetValue: target.targetValue
                }))
            }))
        );
    }
}
