import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from '../_services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../_common/forms.css']
})
export class LoginComponent implements OnInit {

    form:FormGroup;
    errorMessage:string;
    successMessage:string;
    refresh:boolean=false;

    constructor(private fb:FormBuilder, private authService: AuthService, private router: Router) {

        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });

    }

    ngOnInit() {
        if (this.refresh){
            this.router.navigateByUrl(`/user/photographs`);
        }
    }

    login() {

        const val = this.form.value;

        if (val.email && val.password) {

            this.authService.login(val.email, val.password)
                .subscribe(
                    () => {
                        this.successMessage="You have been successfully logged in";
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
