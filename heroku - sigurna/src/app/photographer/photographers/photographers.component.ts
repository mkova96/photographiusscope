import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Photographer } from '../../_models/photographer';
import { PhotographerService } from '../../_services/photographerService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-photographers',
  templateUrl: './photographers.component.html',
  styleUrls: ['./photographers.component.css']
})
export class PhotographersComponent implements OnInit {

  photographers$: Observable<Photographer[]>;
  errorMessage:string;
  successMessage:string;

  constructor(private photographerService: PhotographerService, private router: Router,public toasterService: ToastrService) {
  }

  ngOnInit(): void {
    this.photographers$=this.photographerService.getPhotographers();
  }

  deletePhotographer(id:number){
    this.photographerService.deletePhotographer(id)
    .subscribe(
      () => {
          this.successMessage="Photographer has been deleted";
          this.toasterService.success(this.successMessage, 'Success', { positionClass: 'toast-top-center' ,timeOut:5000});
          setTimeout(() => {
            this.router.navigateByUrl(`photographers`);
        }, 1500);
      },
      err => {
          this.errorMessage = err.error.error;
      }
    );
    this.photographers$=this.photographerService.getPhotographers();
  }
}
