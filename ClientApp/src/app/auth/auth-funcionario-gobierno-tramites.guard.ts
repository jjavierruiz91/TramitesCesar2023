import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFuncionarioGobiernoTramitesGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if (localStorage.getItem('token') != null && localStorage.getItem('rol')=="FuncionarioGobiernoTramites")
      return true;
    else {
      this.router.navigate(['Ingresar']);

    return true;
  }
  
}
}