import { Injectable } from '@angular/core';
import { Empleado } from './empleados.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable()
export class EmpleadosService {
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {}

  empleados: Empleado[] = [
    new Empleado('Juan', 'Diaz', 'Presidente', 7500),
    new Empleado('Ana', 'Martin', 'Directora', 5400),
    new Empleado('Maria', 'Fdez', 'Jefa seccion', 3500),
    new Empleado('Laura', 'Lopez', 'Administrativo', 2500),
  ];

  agragarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Persona que se va agragar' +
        '\n' +
        empleado.nombre +
        '\n' +
        ' Salario: ' +
        empleado.salario
    );

    this.empleados.push(empleado);
  }
}
