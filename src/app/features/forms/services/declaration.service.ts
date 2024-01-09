import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/api/api.service";
import {Declaration} from "../../../models/Declaration";

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  constructor(private api:ApiService) { }

  createDeclaration(declaration:Declaration){
    return this.api.post('disaster/declaration/' , declaration)
  }
}
