import { AuthService } from './auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, first, tap } from 'rxjs/operators';
import * as _ from 'lodash';

export class AuthorizationGuard implements  CanActivate {
    constructor(private allowedRole:string,private authService:AuthService, private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean>  {
        return this.authService.user$.pipe(

            map(user => this.allowedRole == user.role),
            first(),
            tap(allowed => {
                if (!allowed) {
                    this.router.navigateByUrl('/');
                }
            }),
        );
    }
}