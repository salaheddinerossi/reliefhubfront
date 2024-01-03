import {Component, Input} from '@angular/core';
import {Announcement} from "../../models/Announcement";
import {Router} from "@angular/router";

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  constructor(private router:Router) {
  }

  @Input() announcement!: Announcement;

  navigateTo(s: string) {
    this.router.navigate([s]);
  }

}
