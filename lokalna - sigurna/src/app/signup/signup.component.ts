import { Component, OnInit, SecurityContext } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';
import {PasswordPolicy} from '../_common/password-policy';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    errorMessage:string;
    successMessage:string;
    public frmSignup: FormGroup; 

    constructor(private formBuilder: FormBuilder, private authService: AuthService,private router:Router,
      private sanitizer:DomSanitizer,public toasterService: ToastrService) {
      this.frmSignup = this.createSignupForm();
    }

    ngOnInit() {
    }

    submit() {
        const val = this.frmSignup.value;

        if (val.email && val.firstName && val.lastName && val.password && val.password === val.confirmPassword) {

          this.authService.signUp(val.email, val.password,val.firstName,val.lastName,val.profileLink)
          .subscribe(
            () => {
                this.successMessage="You have successfully signed in";
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

    createSignupForm(): FormGroup {
      return this.formBuilder.group(
        {
          profileLink:[null,Validators.compose([
            Validators.minLength(30),
            Validators.maxLength(60),
            Validators.pattern("http://localhost:8081/secure/[a-zA-Z.-]{2,}[.]{1}html"),
          ])],
          firstName:[null,Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(30),
          ])],
          lastName:[null,Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(30),
          ])],
          email: [
            null,
            Validators.compose([
              Validators.email, 
              Validators.required,
              Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"),
              Validators.minLength(6),
              Validators.maxLength(30),
            ])
          ],
          password: [
            null,
            Validators.compose([
              Validators.required,
              // check whether the entered password has a number
              PasswordPolicy.patternValidator(/\d/, {
                hasNumber: true
              }),
              // check whether the entered password has upper case letter
              PasswordPolicy.patternValidator(/[A-Z]/, {
                hasCapitalCase: true
              }),
              // check whether the entered password has a lower case letter
              PasswordPolicy.patternValidator(/[a-z]/, {
                hasSmallCase: true
              }),
              PasswordPolicy.checkTop1000({
                goodPass: true
              }),
              Validators.minLength(8),
              Validators.maxLength(30)
            ])
          ],
          confirmPassword: [null, Validators.compose([Validators.required])]
        },
        {
          // check whether our password and confirm password match
          validator: PasswordPolicy.passwordMatchValidator
        }
      );
    }

}
