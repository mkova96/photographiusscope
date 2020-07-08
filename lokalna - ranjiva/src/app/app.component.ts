import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './_services/auth.service';
import { User } from './_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TestApp';

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  loggedUser$:Observable<User>;
  email:string;
  money:number;
  errorMessage:string;
  successMessage:string;
  session:string;

  constructor(private authService:AuthService,private router:Router) {
    this.authService.user$.subscribe(a=>this.email=a.email);
    this.authService.user$.subscribe(a=>this.money=a.money);

    if (document.cookie){
      this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
    }
  }


  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.isLoggedOut$ = this.authService.isLoggedOut$;

    this.loggedUser$=this.authService.user$;

    if (document.cookie){
      this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);

    }
  }

  logout() {

    this.authService.logout()
    .subscribe(
      () => {
          this.successMessage="You have been successfully logged out";
          setTimeout(() => {
            this.router.navigateByUrl(`/login`);
        }, 0  );
      },
      err => {
          this.errorMessage = err.error.error;
      }
    );
  }
}
