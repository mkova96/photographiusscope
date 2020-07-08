import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { AuthService } from '../_services/auth.service';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form:FormGroup;
    errorMessage:string;
    successMessage:string;
    cap:boolean;

    error_messages = {
        'email': [
          { type: 'required', message: 'Email is required.' },
          { type: 'minlength', message: 'Email length.' },
          { type: 'maxlength', message: 'Email length.' },
          { type: 'pattern', message: 'please enter a email address of a proper type.' }
        ],
        'password': [
          { type: 'required', message: 'password is required.' },
          { type: 'minlength', message: 'password length.' },
          { type: 'maxlength', message: 'password length.' }
        ],
        'captcha': [
            { type: 'required', message: 'captcha is required.' }
        ]
    }

    constructor(private fb:FormBuilder, private authService: AuthService, private router: Router,public toasterService: ToastrService) {

        this.form = this.fb.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30),
                Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"),
                Validators.email
              ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(30)
            ])),
            
            recaptchaReactive: new FormControl('', Validators.compose([
                Validators.required,
            ]))
            }, { 
          validators: this.captcha.bind(this)
        });

    }

    ngOnInit() {
    }

    //function to resolve the reCaptcha and retrieve a token
    async resolved(captchaResponse: string) {
        console.log(`Resolved response token: ${captchaResponse}`);
        this.sendTokenToBackend(captchaResponse); //declaring the token send function with a token parameter
    }
  
    //function to send the token to the node server
    sendTokenToBackend(tok){

        console.log("pozvo capcu")
        //calling the service and passing the token to the service
        this.authService.validateCaptcha(tok).subscribe(
        data => {
            console.log(data);
            this.cap=data.success;
            this.captcha();
        },
        err => {
            console.log(err)
        },
        () => {}
        );
    }

    captcha(){
        console.log(this.cap)
        return this.cap == true ? null : { robot: true };
    }

    login() {

        const val = this.form.value;

        if (val.email && val.password) {

            this.authService.login(val.email, val.password)
                .subscribe(
                    () => {
                        this.successMessage="You have been successfully logged in";
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
}
