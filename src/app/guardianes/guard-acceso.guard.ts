import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardAccesoGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     

    if (localStorage.getItem("rol") === 'U') {
      return true;
    } else if (localStorage.getItem("rol") === 'A') {
      this.router.navigate(['/usuarios']);
      return false;
    } else {
      this.router.navigate(['/login']);
      return false;
    }


  }

}
