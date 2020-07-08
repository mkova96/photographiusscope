import { Component, OnInit } from '@angular/core';
import { PhotographService } from 'src/app/_services/photograph.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Photograph } from 'src/app/_models/photograph';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-photographs',
  templateUrl: './my-photographs.component.html',
  styleUrls: ['./my-photographs.component.css']
})
export class MyPhotographsComponent implements OnInit {

  photos$: Observable<Photograph[]>;
  errorMessage:string;
  successMessage:string;

  constructor(private photographService: PhotographService, private authService: AuthService,private router:Router,public toasterService: ToastrService) {}

  ngOnInit(): void {
    this.photos$=this.photographService.getMyPhotographs();
  }

  sellPhotograph(id:number){
    this.photographService.sellPhotograph(id).
    subscribe(
      () => {
          this.successMessage="Photograph has been sold";
          this.toasterService.success(this.successMessage, 'Success', { positionClass: 'toast-top-center' ,timeOut:5000});
          location.reload(true);
          if (this.photographService.getMyPhotographs() == null){
            this.photos$=null;
          }else{
            this.photos$=this.photographService.getMyPhotographs();
          }
      },
      err => {
          this.errorMessage = err.error.error;
      }
    );
  }

}
