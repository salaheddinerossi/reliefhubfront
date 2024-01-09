import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {OrganizationService} from "../../services/organization.service";
import {ActivatedRoute} from "@angular/router";
import {Donation} from "../../models/Donation";
import {Status} from "../../models/Status";

@Component({
  selector: 'app-announcement-actions',
  templateUrl: './announcement-actions.component.html',
  styleUrls: ['./announcement-actions.component.css']
})
export class AnnouncementActionsComponent implements OnInit{



  defaultNavLinks = environment.organizationNavLinks;
  headerData = environment.organization4;
  title = "Help confirmations";

  statuses = [
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Completed', value: 'COMPLETED' },
    { label: 'In Road', value: 'INROAD' }
  ];


  donations: Donation[] = [];


  constructor(private organizationService:OrganizationService,private route:ActivatedRoute) {
  }


  status:Status={
    id:0,
    status:""
  }
  ngOnInit(): void {

    const announcementId = this.route.snapshot.paramMap.get('announcementId');
    if (announcementId) {
      this.getDonations(announcementId);
      this.status.id=parseInt(announcementId)
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

  onStatusChange(newStatus: string) {
    this.status.status = newStatus;
    this.changeStatus();
  }


  changeStatus() {
    this.organizationService.changeStatus(this.status).subscribe(
      response => {
        alert("status changed")
      },
      error => {
      }
    );
  }
}
