import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environment'; // Adjust the path as necessary
import { HelpForm } from '../../models/HelpForm'; // Adjust the path as necessary
import { HelpFormService } from '../../services/help-form.service'; // Adjust the path as necessary

@Component({
  selector: 'app-help-form',
  templateUrl: './help-form.component.html',
  styleUrls: ['./help-form.component.css']
})
export class HelpFormComponent implements OnInit {
  helpForm: HelpForm; // Assuming HelpForm is an interface
  formFields: any; // This will hold the form configuration

  titlePage: string = '';
  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.helpAnnouncementHeader;

  constructor(
    private helpFormService: HelpFormService,
    private route: ActivatedRoute
  ) {
    // Initialize helpForm with default values
    this.helpForm = {
      targetId: 0,
      authorizationId: 0,
      targetName: '',
      announcementName: ''
      // Initialize other properties as needed
    };
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
        this.formFields = environment.helpForms[data.authorizationId.toString()];
      },
      error => {
        // handle error
      }
    );
  }

  onSubmit() {
    // handle form submission
  }
}
