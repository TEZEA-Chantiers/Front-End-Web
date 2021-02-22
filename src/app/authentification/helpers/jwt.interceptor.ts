import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authentificationService: AuthentificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // add authorization header with jwt token if available
    let currentUser = this.authentificationService.currentUserValue;
    if (currentUser && currentUser.token) {
        request = request.clone({
            setHeaders: { 
                Authorization: 'Bearer '+JSON.parse(currentUser.token)["jwt"]
                
            }
        });
    }

    return next.handle(request);
  }
}
