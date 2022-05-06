import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuarios } from '../../templates/model/usuarios';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  usuario: Usuarios[] = [];
  ngOnInit(): void {
  }

  email = new FormControl('')

  userProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('')
  })

  get dados(){
    return this.userProfileForm.getRawValue()
  }

  onSubmit(){
    console.warn(this.userProfileForm.value)
  }


}
