import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../_models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { Transaction } from '../../_models/transaction';
import { TransactionService } from '../../_services/transaction.service';


@Component({
  selector: 'app-mytransactions',
  templateUrl: './mytransactions.component.html',
  styleUrls: ['./mytransactions.component.css']
})
export class MyTransactionsComponent implements OnInit {

  user$: Observable<User>;
  transactions$: Observable<Transaction[]>;
  email:string;
  session:string;


  constructor(private authService: AuthService, private router: Router,private transactionService: TransactionService) {
    this.email = this.router.url.split("transactions/")[1].toString();
    if (!this.email){
      this.authService.user$.subscribe(a=>this.email=a.email);
    }

    this.user$ = this.authService.user$;

    this.transactions$=this.transactionService.getTransactions(this.email);
    if (document.cookie){
      this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
    }
  }

  ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.email = this.router.url.split("transactions/")[1].toString();
    if (!this.email){
      this.authService.user$.subscribe(a=>this.email=a.email);
    }

    if (document.cookie){
      this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
    }
  }
}
