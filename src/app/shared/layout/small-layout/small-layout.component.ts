import { Component } from '@angular/core';
import {environment} from "../../../../environment";

@Component({
  selector: 'app-small-layout',
  templateUrl: './small-layout.component.html',
  styleUrls: ['./small-layout.component.css']
})
export class SmallLayoutComponent {

  defaultNavLinks = environment.defaultNavLinks;
  headerData=environment.helpAnnouncementHeader;


}
