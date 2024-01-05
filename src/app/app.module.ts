import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {FormsModule} from "@angular/forms";
import {SubmitHelpModule} from "./features/submit-help/submit-help.module";
import {FormsHelpModule} from "./features/forms/forms.module";
import {AuthenticationModule} from "./features/authentication/authentication.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    SubmitHelpModule,
    FormsHelpModule,
    AuthenticationModule
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
