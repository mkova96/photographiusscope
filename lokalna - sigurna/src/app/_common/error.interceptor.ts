import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError,of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public toasterService: ToastrService) {}

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        catchError((err: any) => {
            if(err instanceof HttpErrorResponse) {
              this.toasterService.error(err.error.error, 'Error', { positionClass: 'toast-top-center' ,timeOut:5000});
            }
            return of(err);
        }));
  }
  
}