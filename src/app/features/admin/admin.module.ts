import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import {SharedModule} from "../../shared/shared.module";
import { DisasterCreationComponent } from './pages/disaster-creation/disaster-creation.component';
import {FormsModule} from "@angular/forms";
import { AdminDeclarationComponent } from './pages/admin-declaration/admin-declaration.component';
import { DeclarationPageComponent } from './pages/declaration-page/declaration-page.component';
import { OrganizationManagementComponent } from './pages/organization-management/organization-management.component';
import {RouterLink} from "@angular/router";
import { OrganizationDetailsComponent } from './pages/organization-details/organization-details.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    DisasterCreationComponent,
    AdminDeclarationComponent,
    DeclarationPageComponent,
    OrganizationManagementComponent,
    OrganizationDetailsComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        RouterLink
    ]
})
export class AdminModule { }
