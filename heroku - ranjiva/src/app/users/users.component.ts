import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { SafeUrl, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users$: Observable<User[]>;
    loggedUser$: Observable<User>
    form:FormGroup;
    profileLink1:SafeUrl;
    profileLink2:SafeUrl;
    session:string;
    xss:SafeHtml;
  
    constructor(private authService: AuthService,private fb:FormBuilder, private sanitizer:DomSanitizer,private router:Router) {

        this.form = this.fb.group({
          search: new FormControl('', Validators.compose([
            Validators.required]))
        });
        this.xss = this.sanitizer.bypassSecurityTrustHtml('<svg onload="var i;for (i=0;i<1;++i){alert()}"></svg>');

  }
  
    ngOnInit(): void {
      this.loggedUser$=this.authService.user$;
      this.loggedUser$.subscribe(
        (resp) => {
            this.profileLink1=this.sanitizer.bypassSecurityTrustUrl(resp.profileLink);
            this.xss = this.sanitizer.bypassSecurityTrustHtml('<svg onload="var i;for (i=0;i<1;++i){alert()}"></svg>');
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

    unsanitize(text:string):SafeUrl{
      return this.sanitizer.bypassSecurityTrustUrl(text);
    }
  }

