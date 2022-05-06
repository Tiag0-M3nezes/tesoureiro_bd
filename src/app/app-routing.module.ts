import { PerfilComponent } from './components/view/perfil/perfil.component';
import { DashboardComponent } from './components/templates/home/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';


import { CreateAccountComponent } from './components/view/account/create-account/create-account.component';
import { LoginComponent } from './components/view/account/login/login.component';
import { AuthenticationComponent } from './components/templates/authentication/authentication.component';
import { DividasComponent } from './components/view/dividas/dividas.component';
import { EntrantesComponent } from './components/view/entrantes/entrantes.component';
import { AdicionarComponent } from './components/view/adicionar/adicionar.component';
import { EstatisticasComponent } from './components/view/estatisticas/estatisticas.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: AuthenticationComponent,
    children: [{ path: '', component: LoginComponent },]

  },
  {
    path: "cadastrar",
    component: CreateAccountComponent,
  },
  {
    path: "home",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "perfil",
    component: PerfilComponent,
    canActivate: [AuthGuard]
  }
  // {
  //   path: "",
  //   component: DashboardComponent,
  //   canActivate: [AuthGuard],
  //   children: [{ path: '', component: LoginComponent },]

  // },

  // {
  //   path: "login",
  //   component: AuthenticationComponent,
  //   children: [
  //     { path: '', redirectTo: 'login', pathMatch: 'full' },
  //     { path: 'login', component: LoginComponent },
  //     { path: 'create-account', component: CreateAccountComponent }
  //   ],

  // },
  ,
  {
    path: "estatisticas",
    component: EstatisticasComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "adicionar",
    component: AdicionarComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "entrantes",
    component: EntrantesComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "dividas",
    component: DividasComponent,
    canActivate: [AuthGuard]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
