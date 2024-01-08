import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {DisasterForm} from "../../models/DisasterForm";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-disaster-creation',
  templateUrl: './disaster-creation.component.html',
  styleUrls: ['./disaster-creation.component.css']
})
export class DisasterCreationComponent implements OnInit{

  constructor(private adminService:AdminService) {
  }

  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.helpAnnouncementHeader;
  title = "Create a disaster";

  emptyDisasterForm: DisasterForm = {
    name: '',
    description: '',
    file: null
  };

  disasterForm=this.emptyDisasterForm;


  ngOnInit(): void {
  }
  onSubmit() {
    this.createDisaster(this.disasterForm)
    console.log(this.disasterForm)
  }

  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let file: File | null = null;

    if (element.files && element.files.length > 0) {
      file = element.files[0];
    }

    this.disasterForm.file = file;
  }

  createDisaster(disasterForm:DisasterForm){
    this.adminService.createDisaster(disasterForm).subscribe(
      response =>{
        this.disasterForm = this.emptyDisasterForm;
        alert("disaster created")
      }
    )
  }


}
