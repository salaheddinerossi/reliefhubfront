import { Component } from '@angular/core';
import {Input} from "@angular/core";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {


  @Input() links: { title: string; path: string; }[]=[];

}
