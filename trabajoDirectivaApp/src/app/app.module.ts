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

  registrarUsuario(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    this.registrado = true;
    this.mensaje = 'usuario registrado con éxito';
  }
}
