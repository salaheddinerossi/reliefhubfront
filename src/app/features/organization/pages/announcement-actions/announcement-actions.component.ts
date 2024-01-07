import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {OrganizationService} from "../../services/organization.service";
import {ActivatedRoute} from "@angular/router";
import {Donation} from "../../models/Donation";

@Component({
  selector: 'app-announcement-actions',
  templateUrl: './announcement-actions.component.html',
  styleUrls: ['./announcement-actions.component.css']
})
export class AnnouncementActionsComponent implements OnInit{

  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.helpAnnouncementHeader;
  title = "Help confirmations";

  donations: Donation[] = [];


  constructor(private organizationService:OrganizationService,private route:ActivatedRoute) {
  }

  ngOnInit(): void {

    const announcementId = this.route.snapshot.paramMap.get('announcementId');
    if (announcementId) {
      this.getDonations(announcementId);
    }

  }

  getDonations(announcementId: string) {
    this.organizationService.getDonationsByOrganization(announcementId).subscribe(
        data => {
          this.donations = data.sort((a, b) => {
            if (a.isConfirmed === null) return -1;
            if (b.isConfirmed === null) return 1;
            return 0;
          });
        },
        error => {
        }
    );
  }


  confirmDonation(id: number): void {
    this.organizationService.confirmHelp(id).subscribe({
      next: () => {
        const donationIndex = this.donations.findIndex(d => d.id === id);
        if (donationIndex !== -1) {
          this.donations[donationIndex].isConfirmed = true;
        }
      },
      error: (err) => {
        const donationIndex = this.donations.findIndex(d => d.id === id);
        if (donationIndex !== -1) {
          this.donations[donationIndex].isConfirmed = true;
        }

      }
    });
  }

  cancelDonation(id: number): void {
    this.organizationService.cancelHelp(id).subscribe({
      next: () => {
        const donationIndex = this.donations.findIndex(d => d.id === id);
        if (donationIndex !== -1) {
          this.donations[donationIndex].isConfirmed = false;
        }
      },
      error: (err) => {

        const donationIndex = this.donations.findIndex(d => d.id === id);
        if (donationIndex !== -1) {
          this.donations[donationIndex].isConfirmed = false;
        }

      }
    });
  }
}
