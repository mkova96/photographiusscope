import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Photograph } from '../../_models/photograph';
import { PhotographService } from '../../_services/photograph.service';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-photographs',
  templateUrl: './admin-photographs.component.html',
  styleUrls: ['./admin-photographs.component.css']
})
export class AdminPhotographsComponent implements OnInit {

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
      this.form2 = this.fb.group({
        search: new FormControl()
      },);
  }

  ngOnInit(): void {
    this.photos$=this.photographService.getPhotographs("",this.session);
    this.loggedUser$=this.authService.user$;
  }

  deletePhotograph(id:number){
    this.photographService.deletePhotograph(id).
    subscribe(
      () => {
          this.successMessage="Photograph has been deleted";
          if (this.photographService.getPhotographs("",this.session) == null){
            this.photos$=null;
          }else{
            this.photos$=this.photographService.getPhotographs("",this.session);
          } 
      },
      err => {
          this.errorMessage = err.error.error;
      }
    );
  }
}
