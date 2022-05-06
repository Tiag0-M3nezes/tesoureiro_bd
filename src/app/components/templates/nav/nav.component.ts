import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // mostrarMenub: boolean = false;

  constructor(private loginService: LoginService, private router: Router, private LoginService: LoginService) { }

  ngOnInit(): void {
    // this.loginService.mostrarMenu.subscribe(
    //   mostrar => this.mostrarMenub = mostrar
    // );
  }

  logout() {
    this.LoginService.logout();
    this.router.navigate(['/'])
  }





}
