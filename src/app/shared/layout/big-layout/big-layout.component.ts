import {Component, Input} from '@angular/core';
import {environment} from "../../../../environment";
import {AuthenticationService} from "../../../core/authentication/authentication.service";

@Component({
  selector: 'app-big-layout',
  templateUrl: './big-layout.component.html',
  styleUrls: ['./big-layout.component.css']
})
export class BigLayoutComponent {

  @Input() defaultNavLinks = environment.defaultNavLinks;
  @Input() zoneTextData = environment.defaultZoneText;
  cardsContent = environment.cardsContent




}
