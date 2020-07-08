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

  constructor(private authService: AuthService, private router: Router,private transactionService: TransactionService) {
    this.user$ = this.authService.user$;
    this.transactions$=this.transactionService.getTransactions();

  }

  ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.transactions$=this.transactionService.getTransactions();
  }
}
