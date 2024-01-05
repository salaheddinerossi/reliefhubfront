import {Component, numberAttribute, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environment'; // Adjust the path as necessary
import { HelpForm } from '../../models/HelpForm'; // Adjust the path as necessary
import { HelpFormService } from '../../services/help-form.service';
import {SubmitHelpRequest} from "../../models/SubmitHelpRequest"; // Adjust the path as necessary

@Component({
  selector: 'app-help-form',
  templateUrl: './help-form.component.html',
  styleUrls: ['./help-form.component.css']
})
export class HelpFormComponent implements OnInit {
  helpForm: HelpForm;
  submitHelpRequest:SubmitHelpRequest;
  formFields: any[]=[];
  formValues: { [key: string]: any } = {};
  titlePage: string = '';
  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.helpAnnouncementHeader;

  constructor(
    private helpFormService: HelpFormService,
    private route: ActivatedRoute
  ) {
    this.helpForm = {
      targetId: 0,
      authorizationId: 0,
      targetName: '',
      announcementName: ''
    };
    this.submitHelpRequest={
      fullName:"",
      phone:"",
      address:""
    }
  }



  ngOnInit(): void {
    const targetId = this.route.snapshot.paramMap.get('targetId');
    if(targetId) {
      this.getTargetById(targetId);
    }
  }

  getTargetById(targetId: string) {
    this.helpFormService.getHelpForm(targetId).subscribe(
      data => {
        this.helpForm = data;
        this.titlePage = `${data.announcementName}: ${data.targetName}`;
        const fields = environment.helpForms[data.authorizationId.toString()];
        if (fields) {
          this.formFields = fields;
          // Initialize form values for each field
          fields.forEach(field => {
            this.formValues[field.name] = '';
          });
        } else {
          this.formFields = [];
        }
      },
      error => {
        // handle error
      }
    );
  }

  onSubmit() {
    this.formValues["fullName"] ? this.submitHelpRequest.fullName = this.formValues["fullName"] : this.submitHelpRequest.fullName ="";
    this.formValues["address"] ? this.submitHelpRequest.address = this.formValues["address"] : this.submitHelpRequest.address ="";
    this.formValues["phone"] ? this.submitHelpRequest.phone = this.formValues["phone"] : this.submitHelpRequest.phone ="";
    this.formValues["sex"] ? this.submitHelpRequest.sexe = this.formValues["sex"] : this.submitHelpRequest.sexe;
    this.formValues["description"] ? this.submitHelpRequest.description = this.formValues["description"] : this.submitHelpRequest.description ;
    this.formValues["cardNumber"] ? this.submitHelpRequest.cardNumber = this.formValues["cardNumber"] : this.submitHelpRequest.cardNumber ;
    this.formValues["dateExpiration"] ? this.submitHelpRequest.dateExpiration = this.formValues["dateExpiration"] : this.submitHelpRequest.dateExpiration;
    this.formValues["cvc"] ? this.submitHelpRequest.cvc = this.formValues["cvc"] : this.submitHelpRequest.cvc ;
    this.formValues["number"] ? this.submitHelpRequest.number = this.formValues["number"] : this.submitHelpRequest.number ;
    this.formValues["bloodType"] ? this.submitHelpRequest.bloodType = this.formValues["bloodType"] : this.submitHelpRequest.bloodType ;
    this.submitHelpRequest.targetId=numberAttribute(this.route.snapshot.paramMap.get('targetId'));

    this.helpFormService.submitHelp(this.submitHelpRequest);
    console.log("hello")
  }


}
