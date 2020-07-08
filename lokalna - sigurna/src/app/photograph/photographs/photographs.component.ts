import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Photograph } from 'src/app/_models/photograph';
import { PhotographService } from 'src/app/_services/photograph.service';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  error_messages = {
    'ipaddress': [
      { type: 'maxlength', message: 'Ip address must be beetween 7 and 15 characters long' },
      { type: 'minlength', message: 'Ip address must be beetween 7 and 15 characters long' },
      { type: 'pattern', message: 'That is not a valid ip address' },
    ]
  };

  constructor(private photographService: PhotographService, private router: Router, 
    private authService: AuthService,private fb:FormBuilder,public toasterService: ToastrService) {
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
          this.toasterService.success(this.successMessage, 'Success', { positionClass: 'toast-top-center' ,timeOut:5000});
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
          this.toasterService.success(this.successMessage, 'Success', { positionClass: 'toast-top-center' ,timeOut:5000});
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
          this.toasterService.success(this.successMessage, 'Success', { positionClass: 'toast-top-center' ,timeOut:5000});
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

