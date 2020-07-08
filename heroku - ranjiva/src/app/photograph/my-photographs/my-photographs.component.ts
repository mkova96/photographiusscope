import { Component, OnInit } from '@angular/core';
import { PhotographService } from '../../_services/photograph.service';
import { AuthService } from '../../_services/auth.service';
import { Photograph } from '../../_models/photograph';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-photographs',
  templateUrl: './my-photographs.component.html',
  styleUrls: ['./my-photographs.component.css']
})
export class MyPhotographsComponent implements OnInit {

  photos$: Observable<Photograph[]>;
  errorMessage:string;
  successMessage:string;
  session:string;

  constructor(private photographService: PhotographService, private authService: AuthService,private router:Router) {
    this.session = this.router.url.split("SESSIONID/")[1].toString();
    if (!this.session) {
       this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
     }  }

  ngOnInit(): void {
    this.photos$=this.photographService.getMyPhotographs(this.session);
    this.session = this.router.url.split("SESSIONID/")[1].toString();
    if (!this.session) {
       this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
     }  }

  sellPhotograph(id:number){
    this.photographService.sellPhotograph(id).
    subscribe(
      () => {
          this.successMessage="Photograph has been sold";
          location.reload(true);
          if (this.photographService.getMyPhotographs(this.session) == null){
            this.photos$=null;
          }else{
            this.photos$=this.photographService.getMyPhotographs(this.session);
          }
      },
      err => {
          this.errorMessage = err.error.error;
      }
    );
  }

}
