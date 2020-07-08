
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Transaction } from '../_models/transaction';

@Injectable()
export class TransactionService {

    constructor(private http: HttpClient) {}

    //http://bank.com/transfer.do?acct=MARIA&amount=100000
    sendMoney(receiverEmail:string, amount:number ) {   ///GET VERZIJA
        return this.http.get<Transaction>(`/api/sendmoney/receiver=${receiverEmail}&amount=${amount}`);
    }

    //api/transactions/mail@rg.hr
    getTransactions(email:string):Observable<Transaction[]> {
        return this.http.get<Transaction[]>(`/api/transactions/${email}`);
    }

    addTransactionSerialize(data: string) {
        return this.http.post<Transaction>("/api/addtransactionserial", {data}).pipe(
            shareReplay(),tap()
        );
    }


}