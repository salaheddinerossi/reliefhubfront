import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/api/api.service";
import {DisasterForm} from "../models/DisasterForm";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {AdminDeclaration} from "../models/AdminDeclaration";
import {Organization} from "../models/Organization";
import {Authorization} from "../models/Authorization";
import {map} from "rxjs/operators";
import {OrganizationAuthorization} from "../models/organizationAuthorization";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private api:ApiService , private http: HttpClient) { }

  createDisaster(disasterForm: DisasterForm) {
    const formData = new FormData();
    formData.append('name', disasterForm.name);
    formData.append('description', disasterForm.description);
    if (disasterForm.file) {
      formData.append('file', disasterForm.file, disasterForm.file.name);
    }

    return this.http.post(environment.apiUrl + 'disaster/disaster/upload', formData);
  }

  getAllDeclarations():Observable<AdminDeclaration[]>{
    return this.api.get<AdminDeclaration[]>('disaster/declaration/')
  }

  archiveDeclaration(id:number){
    return this.api.patch("disaster/declaration/"+id)
  }

  getDeclaration(id:string):Observable<AdminDeclaration>{
    return this.api.get<AdminDeclaration>("disaster/declaration/"+id)
  }

  getOrganizations():Observable<Organization[]>{
    return this.api.get<Organization[]>("auth/organization/")
  }

  getOrganization(id:string){
    return this.api.get<Organization>('auth/organization/'+id)
  }

  activeOrganization(id:number){
    return this.api.patch("auth/organization/activite/"+id)
  }

  deactivate(id:number){
    return this.api.patch("auth/organization/deactivate/"+id)
  }


  getAuthorizations():Observable<Authorization[]>{
    return this.api.get<Authorization[]>("/auth/authorization/")
  }
  getAuthorizationsByOrganization(id: number): Observable<number[]> {
    return this.api.get<{authorization: Authorization}[]>(`auth/authorization/organization/${id}`).pipe(
        map(response => response.map(item => item.authorization.id))
    );
  }

  addAuthorization(organizationAuthorization:OrganizationAuthorization){
    return this.api.post("auth/authorization/addAuthorization" , organizationAuthorization)
  }

}
