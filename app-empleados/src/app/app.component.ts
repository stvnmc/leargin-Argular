import { Component } from '@angular/core';
import { Empleado } from './empleados.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de Empleados';

  empleados: Empleado[] = [
    new Empleado('Juan', 'Diaz', 'Presidente', 7500),
    new Empleado('Ana', 'Martin', 'Directora', 5400),
    new Empleado('Maria', 'Fdez', 'Jefa seccion', 3500),
    new Empleado('Laura', 'Lopez', 'Administrativo', 2500),
  ];

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.empleados.push(miEmpleado);
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
}
