import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Photographer } from 'src/app/_models/photographer';
import { Observable } from 'rxjs';
import { PhotographService } from 'src/app/_services/photograph.service';
import { Router } from '@angular/router';
import { PhotographerService } from 'src/app/_services/photographerService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-photograph',
  templateUrl: './add-photograph.component.html',
  styleUrls: ['./add-photograph.component.css']
})
export class AddPhotographComponent implements OnInit {

  
  photographers$: Observable<Photographer[]>;
  form:FormGroup;
  errorMessage:string;
  successMessage:string;

  error_messages = {
    'name': [
      { type: 'maxlength', message: 'Input cannot be more than 50 characters long' },
    ],
    'year': [
      { type: 'max', message: 'Year must be between 1800 and 2020' },
      { type: 'min', message: 'Year must be between 1800 and 2020' },
    ]
  };

  constructor(private fb:FormBuilder, private photographService: PhotographService,
    private photographerService: PhotographerService, private router: Router,public toasterService: ToastrService) {

    this.form = this.fb.group({
      year: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1800),
        Validators.max(2020),
      ])),
      price: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1),
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ])),
      photographerId: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    },);
  }

  ngOnInit(): void {
    this.photographers$ = this.photographerService.getPhotographers();
  }

  createPhotograph() {
    const val = this.form.value;

    if (val.name && val.photographerId && val.year && val.price) {

        this.photographService.addPhotograph(val.name,val.photographerId,val.year,val.price)
            .subscribe(
              () => {
                  this.successMessage="Photograph has been created";
                  this.toasterService.success(this.successMessage, 'Success', { positionClass: 'toast-top-center' ,timeOut:5000});
                  setTimeout(() => {
                      this.router.navigateByUrl(`/photographs`);
                  }, 1500);
              },
              err => {
                  this.errorMessage = err.error.error;
              }
          );

    }
  }
}
