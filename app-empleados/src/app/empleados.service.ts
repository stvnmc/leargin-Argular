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
  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  }
  actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
  }

  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);
  }
}
