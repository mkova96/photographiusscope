import { Component, OnInit, SecurityContext } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/_services/message.service';
import { TransactionService } from 'src/app/_services/transaction.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  
  users$: Observable<User[]>;
  form:FormGroup;
  errorMessage:string;
  successMessage:string;

  constructor(private fb:FormBuilder, private messageService: MessageService, private router: Router,
    private transactionService:TransactionService,private sanitizer:DomSanitizer, private authService:AuthService,public toasterService: ToastrService) {
    
    this.form = this.fb.group({
      content: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(300)
      ])),
      receiverEmail: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    },);
  }

  ngOnInit(): void {
    this.users$ = this.authService.getAllUsers();
  }

  sendMessage() {
    const val = this.form.value;

    if (val.content && val.receiverEmail) {

        this.messageService.addMessage(val.content, val.receiverEmail)
            .subscribe(
              () => {
                  this.successMessage="Message has been sent";
                  this.toasterService.success(this.successMessage, 'Success', { positionClass: 'toast-top-center' ,timeOut:5000});
                  setTimeout(() => {
                      this.router.navigateByUrl(`messages`);
                  }, 1500);
              },
              err => {
                  this.errorMessage = err.error.error;
              }
          );
    }
  }

}
