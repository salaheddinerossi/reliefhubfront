import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {Declaration} from "../../../../models/Declaration";
import {AdminDeclaration} from "../../models/AdminDeclaration";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-admin-declaration',
  templateUrl: './admin-declaration.component.html',
  styleUrls: ['./admin-declaration.component.css']
})
export class AdminDeclarationComponent implements OnInit{

  constructor(private adminService:AdminService) {
  }

  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.helpAnnouncementHeader;
  title = "declaration management";


  declarations:AdminDeclaration[] = [];

  ngOnInit() {
    this.getDeclarations();
  }

  getDeclarations(){
    this.adminService.getAllDeclarations().subscribe(
      data => {
        this.declarations=data;
        console.log(this.declarations);
      }
    )
  }


  archive(id: number) {
    this.adminService.archiveDeclaration(id).subscribe({
        next: () => {
          const donationIndex = this.declarations.findIndex(d => d.id === id);
          if (donationIndex !== -1) {
            this.declarations[donationIndex].isArchived = true;
          }
        },
        error: (err) => {
          const donationIndex = this.declarations.findIndex(d => d.id === id);
          if (donationIndex !== -1) {
            this.declarations[donationIndex].isArchived = true;
          }

        }
      }

    );
  }
}
