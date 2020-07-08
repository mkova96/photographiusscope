import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { Photograph } from '../_models/photograph';


@Injectable()
export class PhotographService {

    constructor(private http: HttpClient) {}

    getPhotographs() : Observable<Photograph[]> {
        return this.http.get<Photograph[]>(`/api/photographs`);
    }

    getMyPhotographs() : Observable<Photograph[]> {
        return this.http.get<Photograph[]>(`/api/myphotographs`);
    }

    getPhotograph(id:number) : Observable<Photograph> {
        var address='/api/photographs/'+id.toString(); 
        return this.http.get<Photograph>(address);
    }

    addPhotograph(name:string,photographerId:number,year:number,price:number){
        return this.http.post<Photograph>('/api/addphotograph',{name,photographerId,year,price}).pipe(
            shareReplay(),tap()
        );
    }

    editPhotograph(id:number,name:string,photographerId:number,year:number,price:number){  
        console.log("pozbavo") ;
        var address='/api/photographs/'+id.toString();   
        return this.http.put<Photograph>(address,{id,name,photographerId,year,price}).pipe(
            shareReplay(),tap()
        );
    }

    deletePhotograph(id:number){  
        var address='/api/photographs/'+id.toString();       
        return this.http.delete<any>(address).pipe(
            shareReplay(),tap()
        );
    }

    buyPhotograph(id:number){  
        var address=`/api/buyphotograph/`+id.toString();       
        return this.http.post<Photograph>(address,{id}).pipe(
            shareReplay(),tap()
        );
    }

    sellPhotograph(id:number){  
        var address=`/api/sellphotograph/`+id.toString();       
        return this.http.post<Photograph>(address,{id}).pipe(
            shareReplay(),tap()
        );
    }

    ping(input:string) {
        return this.http.post<any>('/api/ping',{input});
    }

}