import {tap, shareReplay, map, filter} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, BehaviorSubject} from "rxjs";
import {User} from "../_models/user";

export const ANONYMOUS_USER : User = {
    id: undefined,
    email: '',
    money:undefined,
    firstName:'',
    lastName:'',
    profileLink:'',
    role:''
}


@Injectable()
export class AuthService {

   private subject = new BehaviorSubject<User>(undefined);
   user$: Observable<User> = this.subject.asObservable().pipe(filter(user => !!user));;
   isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));
   isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

    constructor(private http: HttpClient) {
        console.log("TRAZIM KORISNIKA IZ AUTH");
        http.get<User>('/api/user').subscribe(user => this.subject.next(user ? user : ANONYMOUS_USER));
    }


    signUp(email:string, password:string,firstName:string,lastName:string,profileLink:string) {      
        console.log("pozvo stvaranja")
      return this.http.post<User>('/api/signup', {email, password,firstName,lastName,profileLink}).pipe(
          shareReplay(),tap(user => this.subject.next(user)),);
    }

    login(email:string, password:string ) {
        return this.http.post<User>('/api/login', {email, password}).pipe(shareReplay(),tap(user => this.subject.next(user)),);
    }

    logout() : Observable<any> {
        return this.http.post('/api/logout', null).pipe(shareReplay(),tap(user => this.subject.next(ANONYMOUS_USER)));
    }

    getAllUsers() : Observable<User[]> {
        return this.http.get<User[]>('/api/users-all');
    }

    getUsers(input:string) : Observable<User[]> {
        return this.http.post<any>(`/api/users`,{input});
    }

    validateCaptcha(captcha: string) {
        console.log("pozvo capcu")

        return this.http.post<any>('/api/validatecaptcha', {captcha});
    }
}





