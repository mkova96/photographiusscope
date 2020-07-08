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
import { AdminPhotographsComponent } from '../photograph/admin-photographs/admin-photographs.component';


export const routesConfig: Routes = [
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'transaction/SESSIONID/:session',
        component: AddTransactionComponent
    },
/*********************************************** */
    {
        path: 'user/photographs',
        component: PhotographsComponent
    },
    {
        path: 'admin/photographs',
        component: AdminPhotographsComponent
    },
    {
        path: 'myphotographs/SESSIONID/:session',
        component: MyPhotographsComponent
    },
    {
        path: 'photographs/add',
        component: AddPhotographComponent
    },
    {
        path: 'photographs/:id',
        component: EditPhotographComponent
    },
/*********************************************** */
    {
        path: 'photographers',
        component: PhotographersComponent
    },
    {
        path: 'photographers/add',
        component: AddPhotographerComponent
    },
    {
        path: 'photographers/:id',
        component: EditPhotographerComponent
    },
/*********************************************** */

    {
        path: 'messages/SESSIONID/:session',
        component: MessagesComponent
    },
    {
        path: 'messages/add/SESSIONID/:session',
        component: AddMessageComponent
    },

/*********************************************** */
    
    {
        path: 'transactions/:email',
        component: MyTransactionsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '',
        redirectTo:'/user/photographs',
        pathMatch: 'full'
    },
    /*{
        path: '**',
        redirectTo: '/lessons',
        pathMatch: 'full'
    }*/

    
];