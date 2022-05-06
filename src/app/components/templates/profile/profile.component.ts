import { LoginService } from './../../services/login.service';
import { CardsService } from './../../services/cards.service';
import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private service: CardsService, private router: Router, private LoginService: LoginService) { }

  usuario: Usuarios[] = [];
  
  ngOnInit(): void {
    this.service.list().subscribe(dados => this.usuario = dados);
  }

  logout() {
    this.LoginService.logout();
    this.router.navigate(['/'])
  }



}
