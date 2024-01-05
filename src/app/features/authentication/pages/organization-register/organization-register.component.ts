import { Component } from '@angular/core';
import {environment} from "../../../../../environment";
import {OrganizationRegister} from "../../models/OrganizationRegister";
import {FileUploadService} from "../../../../core/file-services/file-upload.service";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-organization-register',
  templateUrl: './organization-register.component.html',
  styleUrls: ['./organization-register.component.css']
})
export class OrganizationRegisterComponent {

  constructor(private fileUploadService:FileUploadService,private registerService:RegisterService) {
  }

  selectedFile: File | null = null;


  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.helpAnnouncementHeader;
  title = "register as an organization";

  organizationRegister:OrganizationRegister={
    name:"",
    address:"",
    description:"",
    email:"",
    password:"",
    documents:""
  }



  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.onUpload();
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.fileUploadService.uploadFileToSpaces(this.selectedFile).subscribe(
          fileUrl => {
            console.log('File uploaded successfully!', fileUrl);
            this.organizationRegister.documents = fileUrl; // Assign the URL to the documents property
          },
          error => {
            console.error('Error uploading file:', error);
          }
      );
    }
  }

  onSubmit() {

    if(this.organizationRegister.documents!=""){
      this.registerService.registerOrganization(this.organizationRegister).subscribe(
          response => {
            alert("account created")
            this.organizationRegister={
              name:"",
              address:"",
              description:"",
              email:"",
              password:"",
              documents:""

            }
            console.log(response)
          },
          error => console.error(error)

      )
    }else {
      alert("the document file is not uploaded yet");
    }

  }
}
