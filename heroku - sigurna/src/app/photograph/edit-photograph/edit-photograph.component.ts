import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PhotographerService } from 'src/app/_services/photographerService';
import { PhotographService } from 'src/app/_services/photograph.service';
import { Photograph } from 'src/app/_models/photograph';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Photographer } from 'src/app/_models/photographer';
import { ToastrService } from 'ngx-toastr';

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

  error_messages = {
    'name': [
      { type: 'maxlength', message: 'Input cannot be more than 50 characters long' },
    ],
    'year': [
      { type: 'max', message: 'Year must be between 1800 and 2020' },
      { type: 'min', message: 'Year must be between 1800 and 2020' },
    ]
  };

 constructor(private route: ActivatedRoute,private fb:FormBuilder, 
   private photographerService:PhotographerService,private photographService:PhotographService, private router: Router,public toasterService: ToastrService) {
     
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
       console.log(this.photograph)
   });
 }

 editPhotograph(){
   const val = this.form.value;

   if (val.name && val.photographerId && val.year && val.price) {
       this.photographService.editPhotograph(this.photographId, val.name , val.photographerId , val.year , val.price)
           .subscribe(
            () => {
                this.successMessage="Photograph has been edited";
                this.toasterService.success(this.successMessage, 'Success', { positionClass: 'toast-top-center' ,timeOut:5000});
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
