import { Usuarios } from './../../templates/model/usuarios';
import { CardsService } from './../../services/cards.service';

import { Sainte } from './../../templates/model/sainte';
import { Router } from '@angular/router'
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



interface Filtros {
  id: string;
  name: string;
}

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  displayedColumns = ['name', 'data', 'valor'];

  Filtros: Filtros[] = [
    { id: 'steak-0', name: 'Contas' },
    { id: 'pizza-1', name: 'Faturas' },
    { id: 'tacos-2', name: 'Compras' },
  ];

  Sainte: Sainte[] = [
    { id: 1, name: 'Coelba', data: '22/09/2002', valor: 33 },
    { id: 2, name: 'Pastelaria', data: '22/09/2002', valor: 44 },
    { id: 3, name: 'Casas Acre', data: '22/09/2002', valor: 44 },
    { id: 4, name: 'Steam', data: '22/09/2002', valor: 33 }
  ];



  constructor(private router: Router, private service: CardsService) { }

  usuario: Usuarios[] = [];

  dataSource = new MatTableDataSource(this.Sainte);


  ngOnInit(): void {
    this.service.list().subscribe(dados => this.usuario = dados);
  }

  navigateAdicionar(): void {
    this.router.navigate(['/adicionar'])
  }

}
