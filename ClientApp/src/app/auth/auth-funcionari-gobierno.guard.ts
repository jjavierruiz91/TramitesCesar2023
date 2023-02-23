import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthFuncionariGobiernoGuard implements CanActivate {
  constructor(private router: Router) {
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if (localStorage.getItem('token') != null && localStorage.getItem('rol')=="FuncionarioGobierno")
      return true;
    else {
      this.router.navigate(['Ingresar']);
      return false;
    }
    }
  
}
