import { Component } from '@angular/core';
import {environment} from "../../../../../environment";
import {Login} from "../../../../models/Login";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../../core/authentication/authentication.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private router:Router, private authenticationService:AuthenticationService ) {
  }

  defaultNavLinks = environment.defaultNavLinks;
  headerData = environment.helpAnnouncementHeader;
  title = "Login as an admin";

  buttonText:string = "Login";

  login:Login = {
    email:"",
    password:""
  }



  onSubmit() {

    this.authenticationService.adminLogin(this.login).subscribe(
      response => {
        this.router.navigate(['/admin']);
      },
      error => {
        console.error(error);
        const errorMessage = error.error.message || 'wrong password ';
        alert(errorMessage);
      }
    );


  }
}
