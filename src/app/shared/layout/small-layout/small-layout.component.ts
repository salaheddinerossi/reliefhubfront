import {Component, Input} from '@angular/core';
import {NavLink} from "../../../models/nav-link";

@Component({
  selector: 'app-small-layout',
  templateUrl: './small-layout.component.html',
  styleUrls: ['./small-layout.component.css']
})
export class SmallLayoutComponent {

  @Input() defaultNavLinks:NavLink[]=[];
  @Input() headerData={imageLink: "",title:"",title2:""}



}
