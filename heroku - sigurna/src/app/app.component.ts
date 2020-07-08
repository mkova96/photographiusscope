import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './_services/auth.service';
import { User } from './_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private authService:AuthService,private router:Router,public toasterService: ToastrService) {
    this.authService.user$.subscribe(a=>this.email=a.email);
    this.authService.user$.subscribe(a=>this.money=a.money);
  }


  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.isLoggedOut$ = this.authService.isLoggedOut$;
    this.loggedUser$=this.authService.user$;
  }

  logout() {

    this.authService.logout()
    .subscribe(
      () => {
          this.successMessage="You have been successfully logged out";
          this.toasterService.success(this.successMessage, 'Success', { positionClass: 'toast-top-center' ,timeOut:5000});

          setTimeout(() => {
            this.router.navigateByUrl('welcome');
        }, 1500);
      },
      err => {
          this.errorMessage = err.error.error;
      }
    );
  }
}
