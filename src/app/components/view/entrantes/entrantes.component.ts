import { Entrantes } from './../../templates/model/entrantes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrantes',
  templateUrl: './entrantes.component.html',
  styleUrls: ['./entrantes.component.scss']
})
export class EntrantesComponent implements OnInit {

  constructor() { }

  displayedColumns = ['name', 'data', 'valor'];

  entrantes: Entrantes[] = [
    { id: 1, name: 'Coelba', data: '22/09/2002', valor: 33 },
    { id: 2, name: 'Pastelaria', data: '22/09/2002', valor: 44 },
    { id: 3, name: 'Casas Acre', data: '22/09/2002', valor: 44 },
    { id: 4, name: 'Steam', data: '22/09/2002', valor: 33 }
  ];

  ngOnInit(): void {
  }



}
