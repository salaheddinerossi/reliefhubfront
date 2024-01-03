import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import { HelpFormComponent } from './pages/help-form/help-form.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HelpFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class FormsHelpModule


{

}
