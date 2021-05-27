import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (localStorage.getItem("rol") === 'A') {
        return true;
      } else if (localStorage.getItem("rol") === 'U') {
        this.router.navigate(['/proximos-estrenos']);
        return false;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  
  
    }
  
}
