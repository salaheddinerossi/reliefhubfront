import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/api/api.service";
import {OrganizationRegister} from "../models/OrganizationRegister";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private api:ApiService) { }

  registerOrganization(organization:OrganizationRegister){
    return this.api.post('auth/organization/register' , organization)
  }

}
