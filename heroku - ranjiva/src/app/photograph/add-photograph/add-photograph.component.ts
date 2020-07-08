import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Photographer } from '../../_models/photographer';
import { Observable } from 'rxjs';
import { PhotographService } from '../../_services/photograph.service';
import { Router } from '@angular/router';
import { PhotographerService } from '../../_services/photographerService';

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

  constructor(private fb:FormBuilder, private photographService: PhotographService,
    private photographerService: PhotographerService, private router: Router) {

    this.form = this.fb.group({
      year: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      price: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
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
                  setTimeout(() => {
                      this.router.navigateByUrl(`admin/photographs`);
                  }, 1500);
              },
              err => {
                  this.errorMessage = err.error.error;
              }
          );

    }
  }
}
