import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Photograph } from '../../_models/photograph';

import { PhotographService } from '../../_services/photograph.service';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-photographs',
  templateUrl: './photographs.component.html',
  styleUrls: ['./photographs.component.css']
})
export class PhotographsComponent  implements OnInit {

  photos$: Observable<Photograph[]>;
  loggedUser$: Observable<User>
  form:FormGroup;
  form2:FormGroup;
  response:any;
  errorMessage:string;
  successMessage:string;
  session:string;

  constructor(private photographService: PhotographService, private router: Router, 
    private authService: AuthService,private fb:FormBuilder) {
      this.form = this.fb.group({
        ipaddress: new FormControl('', Validators.compose([
          Validators.required,
        ]))
      },);
  }

  ngOnInit(): void {
    this.photos$=this.photographService.getPhotographs();
    this.loggedUser$=this.authService.user$;
  }

  deletePhotograph(id:number){
    this.photographService.deletePhotograph(id).subscribe(
      () => {
          if (this.photographService.getPhotographs() == null){
            this.photos$=null;
          }else{
            this.photos$=this.photographService.getPhotographs();
          }                  
        },err => {
          this.errorMessage = err.error.error;
      }
    );
  }

  buyPhotograph(id:number){
    this.photographService.buyPhotograph(id)
    .subscribe(
      () => {
          this.successMessage="Photograph has been bought";
          setTimeout(() => {
            location.reload(true);
          }, 1500);
      },
      err => {
          this.errorMessage = err.error.error;
      }
    );    
  }

  sellPhotograph(id:number){
    this.photographService.sellPhotograph(id).subscribe(
      () => {
          this.successMessage="Photograph has been sold";
          setTimeout(() => {
            location.reload(true);
          }, 1500);
      },
      err => {
          this.errorMessage = err.error.error;
      }
    );
  }

  ping(){
    const val = this.form.value;

    if (val.ipaddress) {
      this.photographService.ping(val.ipaddress).subscribe(
        (resp) => {
            this.response = resp;
        }
      );
    }
  }
}

