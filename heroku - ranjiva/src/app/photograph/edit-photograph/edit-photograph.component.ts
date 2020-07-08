import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PhotographerService } from '../../_services/photographerService';
import { PhotographService } from '../../_services/photograph.service';
import { Photograph } from '../../_models/photograph';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Photographer } from '../../_models/photographer';

@Component({
  selector: 'app-edit-photograph',
  templateUrl: './edit-photograph.component.html',
  styleUrls: ['./edit-photograph.component.css']
})
export class EditPhotographComponent implements OnInit {

  private photographId: number;
  photographers$: Observable<Photographer[]>;
  photograph:Photograph;
  form:FormGroup;
  errorMessage:string;
  successMessage:string;

 constructor(private route: ActivatedRoute,private fb:FormBuilder, 
   private photographerService:PhotographerService,private photographService:PhotographService, private router: Router) {
     
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

 
 ngOnInit() {
   this.route.paramMap
     .pipe(switchMap((params: ParamMap) => params.get("id")))
     .subscribe(id => {
       this.photographId = parseInt(id, 10);
       this.load();
       this.photographers$ = this.photographerService.getPhotographers();
     });
 }

 load(onlyTasks: boolean = false) {
   this.photographService.getPhotograph(this.photographId).subscribe(a => {
       this.photograph = {
         id : a.id,
         name:a.name,
         year : a.year,
         photoLink : a.photoLink,
         photographer:null,
         photographerId:a.photographerId,
         price:a.price,
         userId:null
       };
   });
 }

 editPhotograph(){
   const val = this.form.value;

   if (val.name && val.photographerId && val.year && val.price) {
       this.photographService.editPhotograph(this.photographId, val.name , val.photographerId , val.year , val.price)
           .subscribe(
            () => {
                this.successMessage="Photograph has been edited";
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
