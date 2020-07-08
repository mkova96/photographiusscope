import { Component, OnInit } from '@angular/core';
import { PhotographerService } from '../../_services/photographerService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Photographer } from '../../_models/photographer';

@Component({
  selector: 'app-edit-photographer',
  templateUrl: './edit-photographer.component.html',
  styleUrls: ['./edit-photographer.component.css']
})
export class EditPhotographerComponent implements OnInit {

  private photographerId: number;
  photographer:Photographer;
  form:FormGroup;
  errorMessage:string;
  successMessage:string;

  constructor(private route: ActivatedRoute,private fb:FormBuilder, private photographerService:PhotographerService, private router: Router) {
    this.form = this.fb.group({
      firstName: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      age: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    },);
   }

  
  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => params.get("id")))
      .subscribe(id => {
        this.photographerId = parseInt(id, 10);
        this.load();
      });
  }

  load(onlyTasks: boolean = false) {
    this.photographerService.getPhotographer(this.photographerId).subscribe(a => {
        this.photographer = {
          id : a.id,
          firstName : a.firstName,
          lastName : a.lastName,
          age : a.age
        };
    });
  }

  editPhotographer(){
    const val = this.form.value;

    if (val.firstName && val.lastName && val.age) {
        this.photographerService.editPhotographer(this.photographerId, val.firstName,val.lastName,val.age)
        .subscribe(
          () => {
              this.successMessage="Photographer has been edited";
              setTimeout(() => {
                  this.router.navigateByUrl(`photographers`);
              }, 1500);
          },
          err => {
              this.errorMessage = err.error.error;
          }
      );

    }
  }


}
