import { Component, OnInit, SecurityContext } from '@angular/core';
import { User } from '../../_models/user';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../../_services/message.service';
import { TransactionService } from '../../_services/transaction.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../../_services/auth.service';

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
  session:string;

  constructor(private fb:FormBuilder, private messageService: MessageService, private router: Router,
    private transactionService:TransactionService,private sanitizer:DomSanitizer, private authService:AuthService) {
    
    this.form = this.fb.group({
      content: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(400)
      ])),
      receiverEmail: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    },);
    this.session = this.router.url.split("SESSIONID/")[1].toString();
       if (!this.session) {
          this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
        }
  }

  ngOnInit(): void {
    this.users$ = this.authService.getAllUsers();
    this.session = this.router.url.split("SESSIONID/")[1].toString();
       if (!this.session) {
          this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
        }
  }

  sendMessage() {
    const val = this.form.value;

    if (val.content && val.receiverEmail) {

        this.messageService.addMessage(val.content, val.receiverEmail)
            .subscribe(
              () => {
                  this.successMessage="Message has been sent";
                  setTimeout(() => {
                      this.router.navigateByUrl(`messages/SESSIONID/${this.session}`);
                  }, 1500);
              },
              err => {
                  this.errorMessage = err.error.error;
              }
          );
    }
  }

}
