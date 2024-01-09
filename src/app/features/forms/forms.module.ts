import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import { HelpFormComponent } from './pages/help-form/help-form.component';
import {FormsModule} from "@angular/forms";
import { ReliefRequestComponent } from './pages/relief-request/relief-request.component';
import { DeclarationComponent } from './pages/declaration/declaration.component';
import { LogoutComponent } from './pages/logout/logout.component';



@NgModule({
  declarations: [
    HelpFormComponent,
    ReliefRequestComponent,
    DeclarationComponent,
    LogoutComponent,
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
