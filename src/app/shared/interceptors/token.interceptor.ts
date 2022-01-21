import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner/spinner.service';
import { finalize } from 'rxjs/operators';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private spiner: SpinnerService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spiner.show();    
    return next.handle(request).pipe(
      finalize(() => this.spiner.hide())
    );
  }
}