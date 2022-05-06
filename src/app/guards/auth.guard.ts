import { LoginService } from '../components/services/login.service'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.usuarioEstaAutenticado()) {
      return true;
    }
    this.router.navigate(['/login'])

    throw new Error('Method not implemented.');
  }
}
