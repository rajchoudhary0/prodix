import { Injectable, Injector } from '@angular/core';
import { LoginServiceService } from '../../core/service/login-service.service';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private injector: Injector) { }
  intercept(req, next) {
    const authService = this.injector.get(LoginServiceService);
    const tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `${authService.getToken()}`,

      },
    });
    return next.handle(tokenizedRequest);

  }
}
