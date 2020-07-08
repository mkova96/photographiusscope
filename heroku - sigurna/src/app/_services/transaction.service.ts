import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Transaction } from '../_models/transaction';


@Injectable()
export class TransactionService {

    constructor(private http: HttpClient) {}

    sendMoney(receiverEmail:string, amount:number, password:string) {
        return this.http.post<Transaction>('/api/sendmoney', {receiverEmail, amount,password}).pipe(
            shareReplay(),tap()
        );
    } 

    getTransactions():Observable<Transaction[]> {
        return this.http.get<Transaction[]>('/api/transactions');
    }
}