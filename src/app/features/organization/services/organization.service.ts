import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/api/api.service";
import {DisasterAnnouncements} from "../models/DisasterAnnouncements";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {AuthenticationService} from "../../../core/authentication/authentication.service";
import {Authorization} from "../models/Authorization";
import {AuthorizationResponse} from "../models/AuthorizationResponse ";
import {DisasterName} from "../models/DisasterName";
import {DisasterPolygon} from "../models/DisasterPolygon";
import {AnnouncementForm} from "../models/AnnouncementForm";
import {Announcement} from "../../../models/Announcement";
import {ApiResponse} from "../models/ApiResponse";
import {Donation} from "../models/Donation";
import {Status} from "../models/Status";
import {ReliefRequest} from "../models/ReliefRequest";




@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private api:ApiService,private authenticationService:AuthenticationService) { }

  getDisasterById(disasterId: string): Observable<DisasterAnnouncements> {
    return this.api.get<any>(`announcement/announcements/disaster/all/${disasterId}`).pipe(
      map(response => {
        const disasterAnnouncements: DisasterAnnouncements = {
          name: response.name,
          mainZone: response.mainZone.coordinates.map((coord: [number, number]) => ({
            latitude: coord[1],
            longitude: coord[0]
          })),
          zoneObjects: response.zoneResponses.map((zone: any) => ({
            id: zone.id,
            name: zone.name,
            geometry: zone.geometry.coordinates.map((coord: [number, number]) => ({
              latitude: coord[1],
              longitude: coord[0]
            })),
            assistantRequestsObjects: zone.assistantRequestResponses.map((ar: any) => ({
              id: ar.id,
              expressNeeds: ar.expressNeeds,
              localisation: {
                latitude: ar.localisation.latitude,
                longitude: ar.localisation.longitude
              }
            })),
            announcementObjects: zone.announcementOrganizationResponses.map((ao: any) => ({
              id: ao.id,
              title: ao.title,
              status: ao.status,
              organizationId: ao.organizationId,
              arrivePoint: {
                latitude: ao.arrivePoint.latitude,
                longitude: ao.arrivePoint.longitude
              }
            }))
          }))
        };
        return disasterAnnouncements;
      })
    );
  }



    getAuthorizations(): Observable<Authorization[]> {
        const id = this.authenticationService.currentUserValue?.id;
        return this.api.get<AuthorizationResponse[]>(`/auth/authorization/organization/${id}`).pipe(
            map((response: AuthorizationResponse[]) => {
                return response.map((ao) => ({
                    id: ao.authorization.id,
                    name: ao.authorization.name
                }));
            })
        );
    }

    getDisastersNames(): Observable<DisasterName[]> {
        return this.api.get<DisasterName[]>("/disaster/disaster/").pipe(
            map((response: DisasterName[]) => {
                return response.map((disaster: DisasterName) => ({
                    id: disaster.id,
                    name: disaster.name
                }));
            })
        );
    }

    getDisasterWithZones(disasterId:string):Observable<DisasterPolygon>{
        return this.api.get<any>(`announcement/announcements/disaster/all/${disasterId}`).pipe(
            map(response => {
                const disasterAnnouncements: DisasterPolygon = {
                    name: response.name,
                    mainZone: response.mainZone.coordinates.map((coord: [number, number]) => ({
                        latitude: coord[1],
                        longitude: coord[0]
                    })),
                    zones: response.zoneResponses.map((zone: any) => ({
                        id: zone.id,
                        name: zone.name,
                        geometry: zone.geometry.coordinates.map((coord: [number, number]) => ({
                            latitude: coord[1],
                            longitude: coord[0]
                        })),
                    }))
                };
                return disasterAnnouncements;
            })
        );

    }

    createAnnouncement(announcement:AnnouncementForm){
      return this.api.post("announcement/announcements/",announcement)
    }

    getAnnouncementByOrganization(): Observable<Announcement[]> {
        return this.api.get<ApiResponse[]>('announcement/announcements/organization').pipe(
            map((data: ApiResponse[]) =>
                data.map(item => ({
                    link: 'organization/profile/'+item.id,
                    image: item.image,
                    title: item.title,
                    description: item.description,
                    authorization_name: item.authorizationResponse.name,
                    authorization_id: item.authorizationResponse.id,
                    disaster_name: item.disasterName,
                    target_name: item.targetResponses.map((target: { name: string }) => target.name)
                }))
            )
        );
    }

    getDonationsByOrganization(announcementId: string): Observable<Donation[]> {
        return this.api.get<{ [key: string]: any }[]>('submithelp/volunteerInfo/announcement/' + announcementId).pipe(
            map((data: any[]) =>
                data.map(item => ({
                    id: item.id,
                    name: item.fullName,
                    phone: item.phone,
                    address: item.address,
                    targetName: item.targetName,
                    isConfirmed: item.isConfirmed
                }))
            )
        );
    }

    confirmHelp(id:number){
      return this.api.patch('submithelp/volunteerInfo/confirm/'+id)
    }

    cancelHelp(id:number){
        return this.api.patch('submithelp/volunteerInfo/cancel/'+id)
    }

    changeStatus(status:Status){
       return this.api.post("announcement/announcements/changeStatus",status)
    }

  getReliefRequest(id: string) {
    return this.api.get<ReliefRequest>("assistancerequest/" + id).pipe(
      map(data => {
        return {
          id: data.id,
          fullname: data.fullname,
          phone: data.phone,
          address: data.address,
          expressNeeds: data.expressNeeds
        } as ReliefRequest;
      })
    );
  }
}
