import { Injectable } from '@angular/core';
import { Empleado } from './empleados.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServices } from './data.services';
import { Observable } from 'rxjs';

@Injectable()
export class EmpleadosService {
  constructor(
    private servicioVentanaEmergente: ServicioEmpleadosService,
    private dataService: DataServices
  ) {}

  obtenerEmpleados(): Observable<Empleado[]> {
    return this.dataService.cargarEmpleados();
  }

  empleados: Empleado[] = [];

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

    this.dataService.guardarEmpleados(this.empleados);
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

    this.dataService.actulizarEmpleado(indice, empleado);
  }

  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);

    this.dataService.eliminarEmpleado(indice);

    this.dataService.guardarEmpleados(this.empleados);
  }
}
