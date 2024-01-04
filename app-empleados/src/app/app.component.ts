import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleados.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Listado de Empleados';

  constructor(
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  empleados: Empleado[] = [];

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    // this.miServicio.muestraMensaje(
    //   'Persona que se va agragar:' +
    //     '\n' +
    //     miEmpleado.nombre +
    //     '\n' +
    //     'Salarios: ' +
    //     miEmpleado.salario
    // );
    this.empleadosService.agragarEmpleadoServicio(miEmpleado);
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
}
