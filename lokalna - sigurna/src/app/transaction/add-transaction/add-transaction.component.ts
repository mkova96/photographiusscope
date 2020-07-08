import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../_models/user';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { TransactionService } from '../../_services/transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../../_models/transaction';
import { AuthService } from '../../_services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  users$: Observable<User[]>;
  form:FormGroup;
  transaction:Transaction;

  errorMessage:string;
  successMessage:string;

  error_messages = {
    'amount': [
      { type: 'max', message: 'Amount must be between $1 and $10 000' },
      { type: 'min', message: 'Amount must be between $1 and $10 000' },

    ],
    'password': [
      { type: 'minlength', message: 'Password length must be at least 8' },
    ]
  };

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router,
    private transactionService:TransactionService,public toasterService: ToastrService) {
    
    this.form = this.fb.group({
      amount: new FormControl('', Validators.compose([
        Validators.min(1),
        Validators.max(10000),
        Validators.required,
      ])),
      receiverEmail: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]))
    },);
  }

  ngOnInit(): void {
    this.users$ = this.authService.getAllUsers();
  }

  sendMoney() { 
    const val = this.form.value;

    if (val.amount && val.receiverEmail && val.password) {

      this.transactionService.sendMoney(val.receiverEmail, val.amount,val.password)
          .subscribe(
              () => {
                  this.successMessage="Money has been sent";
                  this.toasterService.success(this.successMessage, 'Success', { positionClass: 'toast-top-center' ,timeOut:5000});
                  setTimeout(() => {
                    this.router.navigateByUrl(`/transactions`);
                  }, 1500);
              },err => {
                this.errorMessage = err.error.error;
              }
          );
    }
  }
}
