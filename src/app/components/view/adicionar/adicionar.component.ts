import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  vegetables: Vegetable[] = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'strawberry' },
    { name: 'orange' },
    { name: 'kiwi' },
    { name: 'cherry' },
  ];
 

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  algo(): void {
    console.log('algo por aqui')
    this.router.navigate(['/home'])
    
  }

}
