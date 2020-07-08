import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PhotographerService } from '../../_services/photographerService';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-photographer',
  templateUrl: './add-photographer.component.html',
  styleUrls: ['./add-photographer.component.css']
})
export class AddPhotographerComponent implements OnInit {

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
  
  constructor(private fb:FormBuilder, private photographerService:PhotographerService, private router: Router,public toasterService: ToastrService) {
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

  ngOnInit(): void {
  }

  createPhotographer(){
    const val = this.form.value;

    if (val.firstName && val.lastName && val.age) {
        this.photographerService.addPhotographer(val.firstName,val.lastName,val.age)
            .subscribe(
              () => {
                  this.successMessage="Photographer has been created";
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
