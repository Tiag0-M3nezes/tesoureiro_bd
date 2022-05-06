import { Router } from '@angular/router';
import { Usuario } from './../view/account/login/usuario';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usuarioAutenticado: boolean = false;

  mostrarMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.email == 'tiagomenezes013@gmail.com' && usuario.senha == '123456') {
      this.usuarioAutenticado = true;
      this.mostrarMenu.emit(true);
      this.router.navigate(['/home']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenu.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  logout() {
    this.mostrarMenu.emit(false)
  }


}
