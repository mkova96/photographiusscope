import { Component, OnInit } from '@angular/core';
import { PhotographerService } from 'src/app/_services/photographerService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Photographer } from 'src/app/_models/photographer';
import { ToastrService } from 'ngx-toastr';

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

  error_messages = {
    'firstName': [
      { type: 'maxlength', message: 'Input cannot be more than 30 characters long' },
    ],
    'lastName': [
      { type: 'maxlength', message: 'Input cannot be more than 30 characters long' },
    ],
    'age': [
      { type: 'max', message: 'Age must be between 18 and 100' },
      { type: 'min', message: 'Age must be between 18 and 100' },

    ]
  };

  constructor(private route: ActivatedRoute,private fb:FormBuilder, private photographerService:PhotographerService, 
    private router: Router,public toasterService: ToastrService) {
    this.form = this.fb.group({
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
      ])),
      age: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(18),
        Validators.max(100)
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
        console.log(this.photographer)
    });
  }

  editPhotographer(){
    const val = this.form.value;

    if (val.firstName && val.lastName && val.age) {
        this.photographerService.editPhotographer(this.photographerId, val.firstName,val.lastName,val.age)
        .subscribe(
          () => {
              this.successMessage="Photographer has been edited";
              this.toasterService.success(this.successMessage, 'Success', { positionClass: 'toast-top-center' ,timeOut:5000});
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
