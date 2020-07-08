import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../_models/user';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { TransactionService } from '../../_services/transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../../_models/transaction';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  users$: Observable<User[]>;
  form:FormGroup;
  transaction:Transaction;
  email:string;

  errorMessage:string;
  successMessage:string;

  file:File;
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  fileExample=`{
    "receiver": "markomail.hr",
    "amount": 200
  }`;

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router,
    private transactionService:TransactionService) {
    
    this.form = this.fb.group({
      amount: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      receiverEmail: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    },);

    this.authService.user$.subscribe(a=>this.email=a.email);
  }

  ngOnInit(): void {
    this.users$ = this.authService.getAllUsers();
  }

  sendMoney() { 
    const val = this.form.value;

    if (val.amount && val.receiverEmail) {

      this.transactionService.sendMoney(val.receiverEmail, val.amount)
          .subscribe(
              () => {
                  this.successMessage="Money has been sent";
                  setTimeout(() => {
                    this.router.navigateByUrl(`/transactions/${this.email}`);
                  }, 1500);
              },err => {
                this.errorMessage = err.error.error;
              }
          );
    }
  }

  get f(){
    return this.myForm.controls;
  }

  onFileChange(event) {
      this.file = event.target.files[0];
  }

  uploadFile(){
    if (!this.file)
      return;

    const reader = new FileReader();

    reader.onload = (evt) => {
        const data: string = (evt as any).target.result;

        this.transactionService.addTransactionSerialize(data)
            .subscribe(
              () => {
                this.successMessage="Money has been sent";
                setTimeout(() => {
                  this.router.navigateByUrl(`/transactions/${this.email}`);
                }, 1500);
              },err => {
                this.errorMessage = err.error.error;
              }
            );
    };
    reader.readAsText(this.file);
  }
}
