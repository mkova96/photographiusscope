import {Routes} from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {SignupComponent} from "../signup/signup.component";
import {AddTransactionComponent} from "../transaction/add-transaction/add-transaction.component";
import {MyTransactionsComponent} from "../transaction/mytransactions/mytransactions.component";
import { PhotographersComponent } from '../photographer/photographers/photographers.component';
import { AddPhotographerComponent } from '../photographer/add-photographer/add-photographer.component';
import { EditPhotographerComponent } from '../photographer/edit-photographer/edit-photographer.component';
import { PhotographsComponent } from '../photograph/photographs/photographs.component';
import { AddPhotographComponent } from '../photograph/add-photograph/add-photograph.component';
import { EditPhotographComponent } from '../photograph/edit-photograph/edit-photograph.component';
import { MyPhotographsComponent } from '../photograph/my-photographs/my-photographs.component';
import { MessagesComponent } from '../message/messages/messages.component';
import { AddMessageComponent } from '../message/add-message/add-message.component';
import { UsersComponent } from '../users/users.component';
import { WelcomeComponent } from '../welcome/welcome.component';


export const routesConfig: Routes = [
    
/*********************************************** */
    {
        path: 'photographs',
        component: PhotographsComponent,
        canActivate:["authenticationGuard"]
    },
    {
        path: 'myphotographs',
        component: MyPhotographsComponent,
        canActivate: ["usersOnlyGuard"]
    },
    {
        path: 'photographs/add',
        component: AddPhotographComponent,
        canActivate: ["adminsOnlyGuard"]
    },
    {
        path: 'photographs/:id',
        component: EditPhotographComponent,
        canActivate: ["adminsOnlyGuard"]
    },
/*********************************************** */
    {
        path: 'photographers',
        component: PhotographersComponent,
        canActivate:["adminsOnlyGuard"]
    },
    {
        path: 'photographers/add',
        component: AddPhotographerComponent,
        canActivate: ["adminsOnlyGuard"]
    },
    {
        path: 'photographers/:id',
        component: EditPhotographerComponent,
        canActivate: ["adminsOnlyGuard"]
    },
/*********************************************** */

    {
        path: 'messages',
        component: MessagesComponent,
        canActivate: ["usersOnlyGuard"]
    },
    {
        path: 'messages/add',
        component: AddMessageComponent,
        canActivate: ["usersOnlyGuard"]
    },

/*********************************************** */
    
    {
        path: 'transactions',
        component: MyTransactionsComponent,
        canActivate:["authenticationGuard"]
    },
    {
        path: 'transaction',
        component: AddTransactionComponent,
        canActivate: ["usersOnlyGuard"]
    },
/*********************************************** */
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'signup',
        component: SignupComponent
    },
    /*********************************************** */
    {
        path: 'users',
        component: UsersComponent,
        canActivate:["authenticationGuard"]
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: '',
        redirectTo:'/welcome',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/welcome',
        pathMatch: 'full'
    }    
];