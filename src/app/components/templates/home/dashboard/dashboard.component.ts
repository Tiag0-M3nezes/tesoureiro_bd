import { Sainte } from '../../model/sainte';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

interface Filtros {
  id: string;
  name: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['name', 'data', 'valor'];


  Filtros: Filtros[] = [
    { id: 'steak-0', name: 'Contas' },
    { id: 'pizza-1', name: 'Faturas' },
    { id: 'tacos-2', name: 'Compras' },
  ];

  saintes: Sainte[] = [
    { id: 1, name: 'Coelba', data: '22/09/2002', valor: 33 },
    { id: 2, name: 'Pastelaria', data: '22/09/2002', valor: 44 },
    { id: 3, name: 'Casas Acre', data: '22/09/2002', valor: 44 },
    { id: 4, name: 'Steam', data: '22/09/2002', valor: 33 }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateAdicionar(): void {
    this.router.navigate(['/adicionar'])
  }

}
