import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationLoginComponent } from './pages/organization-login/organization-login.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { OrganizationRegisterComponent } from './pages/organization-register/organization-register.component';



@NgModule({
  declarations: [
    OrganizationLoginComponent,
    AdminLoginComponent,
    OrganizationRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
