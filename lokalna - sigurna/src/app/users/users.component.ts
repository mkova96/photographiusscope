import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { SafeUrl, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {validSearch} from '../_common/user-search.validator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users$: Observable<User[]>;
    loggedUser$: Observable<User>
    form:FormGroup;
    profileLink:SafeUrl;

    error_messages = {
      'search': [
        { type: 'maxlength', message: 'Input cannot be more than 25 characters long' },
        { type: 'validSearch', message: 'Your input is not valid' }
      ]
    };
  
    constructor(private authService: AuthService,private fb:FormBuilder, private sanitizer:DomSanitizer,private router:Router) {

      this.form = this.fb.group({
        search: new FormControl('', Validators.compose([
          Validators.required,
          validSearch(),
          Validators.maxLength(25),
        ])),
      },);
  }
  
    ngOnInit(): void {
      this.loggedUser$=this.authService.user$;
      this.loggedUser$.subscribe(
        (resp) => {
            this.profileLink=this.sanitizer.bypassSecurityTrustUrl(resp.profileLink);
            if (resp.email== 'admin@mail.hr'){
              this.users$=this.authService.getAllUsers();
            }
        }
      );
    }
  
    search(){
      const val = this.form.value;
  
      if (val.search) {
        this.users$=this.authService.getUsers(val.search);
      }
    }
  }

