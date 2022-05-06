import { LoginService } from './components/services/login.service';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'frontend';

  mostrarMenub: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.mostrarMenu.subscribe(
      mostrar => this.mostrarMenub = mostrar
    );
  }
}
