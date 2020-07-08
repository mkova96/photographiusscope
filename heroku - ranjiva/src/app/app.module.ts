import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {routesConfig} from "./_common/routes.config";
import {ReactiveFormsModule} from "@angular/forms";
import { AdminPhotographsComponent } from './photograph/admin-photographs/admin-photographs.component';



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
    AdminPhotographsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig),
    ReactiveFormsModule
  ],
  providers: [AuthService, TransactionService, PhotographerService,PhotographService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
