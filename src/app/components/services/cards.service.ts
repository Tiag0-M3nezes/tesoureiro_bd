import { Usuarios } from './../templates/model/usuarios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private readonly API = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Usuarios[]>(this.API)
  }
}
