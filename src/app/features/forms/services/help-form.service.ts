import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/api/api.service";
import {Observable} from "rxjs";
import {HelpForm} from "../models/HelpForm";
import {map} from "rxjs/operators";
import {SubmitHelpRequest} from "../models/SubmitHelpRequest";

@Injectable({
  providedIn: 'root'
})
export class HelpFormService {

  constructor(private api:ApiService) { }

  getHelpForm(id:string): Observable<HelpForm>{

    return this.api.get<any>(`submithelp/volunteerInfo/getType/${id}`).pipe(
      map(
        response => ({

          targetId: response.targetId,
          authorizationId: response.authorizationId,
          targetName: response.targetName,
          announcementName: response.announcementName
        })
      )
    )

  }

  submitHelp(helpRequest:SubmitHelpRequest){
    console.log(helpRequest)
    this.api.post('submithelp/volunteerInfo/', helpRequest)
      .subscribe(
        response => console.log(response),
        error => console.error(error)
      );
  }


}
