import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'trabajoDirectivaApp';

  mensaje = '';

  registrado = false;

  nombre: string = '';
  apellido: string = '';

  entradas: object[];
  constructor() {
    this.entradas = [
      { titulo: 'Python cada dia mas presente' },
      { titulo: 'Java presente desde hace mas de 20 a;os' },
      { titulo: 'javaScript cada vexz mas funcional' },
      { titulo: 'Kotlin potencia para tus apps' },
      { titulo: 'donde quedo pascal' },
    ];
  }

  registrarUsuario() {
    this.registrado = true;

    this.mensaje = 'usuario registrado con exito';
  }
}
