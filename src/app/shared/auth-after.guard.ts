import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAfterGuard implements CanActivate {
 constructor(private token: TokenService,
  private router: Router){}
  
canActivate(): boolean {
  if(this.token.isLoggedIn()){
    this.router.navigate(['/main'])
    return true
  
  }else{
    return false
  }
}

}
