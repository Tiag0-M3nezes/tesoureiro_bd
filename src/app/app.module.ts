import { HomeRoutingModule } from './components/templates/home/home-routing.module';
import { DashboardComponent } from './components/templates/home/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginService } from './components/services/login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule }from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { EstatisticasComponent } from './components/view/estatisticas/estatisticas.component';
import { AdicionarComponent } from './components/view/adicionar/adicionar.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { EntrantesComponent } from './components/view/entrantes/entrantes.component';
import { DividasComponent } from './components/view/dividas/dividas.component';
import { LoginComponent } from './components/view/account/login/login.component';
import { CreateAccountComponent } from './components/view/account/create-account/create-account.component';
import { AuthenticationComponent } from './components/templates/authentication/authentication.component';
import { HomesComponent } from './components/view/homes/homes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/templates/home/home.component';
import { CadastroComponent } from './components/view/cadastro/cadastro.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './components/templates/profile/profile.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PerfilComponent } from './components/view/perfil/perfil.component';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms'




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EstatisticasComponent,
    AdicionarComponent,
    EntrantesComponent,
    DividasComponent,
    LoginComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    HomesComponent,
    DashboardComponent,
    HomeComponent,
    CadastroComponent,
    ProfileComponent,
    PerfilComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatButtonToggleModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    HomeRoutingModule,
    MatMenuModule,
    MatPaginatorModule,
    MatChipsModule,
    NgxChartsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
