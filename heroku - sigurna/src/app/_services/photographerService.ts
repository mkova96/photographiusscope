import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Photographer } from '../_models/photographer';
import { shareReplay, tap } from 'rxjs/operators';


@Injectable()
export class PhotographerService {

    constructor(private http: HttpClient) {


    }

    getPhotographers() : Observable<Photographer[]> {
        return this.http.get<Photographer[]>('/api/photographers');
    }

    getPhotographer(id:number) : Observable<Photographer> {
        var address='/api/photographers/'+id.toString(); 
        return this.http.get<Photographer>(address);
    }

    addPhotographer(firstName:string,lastName:string,age:number){      
        return this.http.post<Photographer>('/api/addphotographer',{firstName,lastName,age}).pipe(
            shareReplay(),tap()
        );
    }

    editPhotographer(id:number,firstName:string,lastName:string,age:number){   
        var address='/api/photographers/'+id.toString();   
        return this.http.put<Photographer>(address,{id,firstName,lastName,age}).pipe(
            shareReplay(),tap()
        );
    }

    deletePhotographer(id:number){  
        var address='/api/photographers/'+id.toString();       
        return this.http.delete<any>(address).pipe(
            shareReplay(),tap()
        );
    }

}