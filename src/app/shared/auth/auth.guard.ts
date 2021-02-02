import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import { LoginServiceService } from '../../core/service/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private activeRoute:ActivatedRoute,private authService:LoginServiceService){}

  canActivate(): boolean {
      console.log(this.router.url);
      if(this.authService.isloggedIn()){
          return true;
      } else {
          this.router.navigate(['core/login']);
          return false;
      }
  }
  
}
