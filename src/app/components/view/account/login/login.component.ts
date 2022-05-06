import { Usuario } from './usuario';
import { LoginService } from '../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  fazerLogin() {
    // console.log(this.usuario)
    this.LoginService.fazerLogin(this.usuario);
  }

  cadastrar() {
    this.router.navigate(['/cadastrar'])
  }


}
