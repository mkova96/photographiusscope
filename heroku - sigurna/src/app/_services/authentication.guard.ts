import { AuthService } from './auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, first, tap } from 'rxjs/operators';
import * as _ from 'lodash';

export class AuthenticationGuard implements  CanActivate {
    
    constructor(private authService:AuthService, private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean>  {
        return this.authService.user$.pipe(

            map(user => user.id != undefined),
            first(),
            tap(allowed => {
                if (!allowed) {
                    this.router.navigateByUrl('/');
                }
            }),
        );
    }
}