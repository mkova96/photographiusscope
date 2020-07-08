import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable()
export class MessageService {

    constructor(private http: HttpClient) {}

    getMessages() : Observable<Message[]> {
        return this.http.get<Message[]>('/api/messages');
    }

    addMessage(content:string,receiverEmail:number){ 
        console.log("saljem");
        return this.http.post<Message>('/api/addmessage',{content,receiverEmail}).pipe(
            shareReplay(),tap()
        );
    }
}