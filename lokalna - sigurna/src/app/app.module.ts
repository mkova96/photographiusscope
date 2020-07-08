import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {routesConfig} from "./_common/routes.config";
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { AuthService } from './_services/auth.service';
import { TransactionService } from './_services/transaction.service';
import { PhotographService } from './_services/photograph.service';
import { MessageService } from './_services/message.service';

import {Router, RouterModule} from "@angular/router";

import { AddTransactionComponent } from './transaction/add-transaction/add-transaction.component';
import { MyTransactionsComponent } from './transaction/mytransactions/mytransactions.component';
import { PhotographersComponent } from './photographer/photographers/photographers.component';
import { PhotographerService } from './_services/photographerService';
import { AddPhotographerComponent } from './photographer/add-photographer/add-photographer.component';
import { EditPhotographerComponent } from './photographer/edit-photographer/edit-photographer.component';
import { PhotographsComponent } from './photograph/photographs/photographs.component';
import { AddPhotographComponent } from './photograph/add-photograph/add-photograph.component';
import { EditPhotographComponent } from './photograph/edit-photograph/edit-photograph.component';
import { MyPhotographsComponent } from './photograph/my-photographs/my-photographs.component';
import { AddMessageComponent } from './message/add-message/add-message.component';
import { MessagesComponent } from './message/messages/messages.component';
import { UsersComponent } from './users/users.component';
import { AuthorizationGuard } from './_services/authorization.guard';
import { AuthenticationGuard } from './_services/authentication.guard';
import { ErrorInterceptor } from './_common/error.interceptor';
import { WelcomeComponent } from './welcome/welcome.component';
import { RbacAllowDirective } from './_common/rbac-allow.directive';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


export function createAdminOnlyGuard(authService:AuthService, router:Router) {
  return new AuthorizationGuard('ADMIN', authService, router);
}
export function createUserOnlyGuard(authService:AuthService, router:Router) {
return new AuthorizationGuard('USER', authService, router);
}
export function createAuthenticationGuard(authService:AuthService, router:Router) {
return new AuthenticationGuard(authService, router);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddTransactionComponent,
    MyTransactionsComponent,
    PhotographersComponent,
    AddPhotographerComponent,
    EditPhotographerComponent,
    PhotographsComponent,
    AddPhotographComponent,
    EditPhotographComponent,
    MyPhotographsComponent,
    AddMessageComponent,
    MessagesComponent,
    UsersComponent,
    WelcomeComponent,
    RbacAllowDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'x-xsrf-token'
    }),
    RouterModule.forRoot(routesConfig),
    ReactiveFormsModule,
    RecaptchaModule,  //this is the recaptcha main module
    RecaptchaFormsModule, //this is the module for form incase form validation
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [AuthService, TransactionService, PhotographerService,PhotographService,MessageService,
    {
      provide: 'adminsOnlyGuard',
      useFactory: createAdminOnlyGuard,
      deps: [
          AuthService,
          Router
      ]
    },
    {
      provide: 'usersOnlyGuard',
      useFactory: createUserOnlyGuard,
      deps: [
          AuthService,
          Router
      ]
    },
    {
      provide: 'authenticationGuard',
      useFactory: createAuthenticationGuard,
      deps: [
          AuthService,
          Router
      ]
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ErrorInterceptor,
       multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
