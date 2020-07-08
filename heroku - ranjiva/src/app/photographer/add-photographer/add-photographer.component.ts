import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PhotographerService } from '../../_services/photographerService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-photographer',
  templateUrl: './add-photographer.component.html',
  styleUrls: ['./add-photographer.component.css']
})
export class AddPhotographerComponent implements OnInit {

  form:FormGroup;
  errorMessage:string;
  successMessage:string;
  
  constructor(private fb:FormBuilder, private photographerService:PhotographerService, private router: Router) {
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

  ngOnInit(): void {
  }

  createPhotographer(){
    const val = this.form.value;

    if (val.firstName && val.lastName && val.age) {
        this.photographerService.addPhotographer(val.firstName,val.lastName,val.age)
            .subscribe(
              () => {
                  this.successMessage="Photographer has been created";
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
