import { Component, OnInit, SecurityContext } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../_common/forms.css']
})
export class SignupComponent implements OnInit {

    form:FormGroup;
    errorMessage:string;
    successMessage:string;
    refresh:boolean=false;

    constructor(private formBuilder: FormBuilder, private authService: AuthService,private router:Router,private sanitizer:DomSanitizer) {
      this.form = this.formBuilder.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        password: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        confirmpassword: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        firstName: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        lastName: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        profileLink: new FormControl('', Validators.compose([
        ])),
      });
    }

    ngOnInit() {
      if (this.refresh){
        this.router.navigateByUrl(`/user/photographs`);
      }
    }

    signUp() {
        const val = this.form.value;

        if (val.email && val.firstName&& val.lastName && val.password && val.password === val.confirmpassword) {

          this.authService.signUp(val.email, val.password,val.firstName,val.lastName,val.profileLink)
          .subscribe(
            () => {
                this.successMessage="You have successfully signed in";
                this.refresh=true;
                setTimeout(() => {location.reload(true)
                }, 1500);
            },
            err => {
                this.errorMessage = err.error.error;
            }
        );

        }
        
    }

}
