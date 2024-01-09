import { Component } from '@angular/core';
import {environment} from "../../../../../environment";
import {AuthenticationService} from "../../../../core/authentication/authentication.service";
import {Login} from "../../../../models/Login";
import { Router } from '@angular/router';


@Component({
  selector: 'app-organization-login',
  templateUrl: './organization-login.component.html',
  styleUrls: ['./organization-login.component.css']
})
export class OrganizationLoginComponent {

  constructor(private authenticationService:AuthenticationService,private router:Router) {
  }

  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.login;
  title = "Login as an organization";


  buttonText:string = "Login";

  login:Login = {
    email:"",
    password:""
  }

  onSubmit() {
    this.authenticationService.organizationLogin(this.login).subscribe(
      response => {
        this.router.navigate(['/organization']);
      },
      error => {
        console.error(error);
        const errorMessage = error.error.message || 'wrong password or account not activated';
        alert(errorMessage);
      }
    );
  }
}
