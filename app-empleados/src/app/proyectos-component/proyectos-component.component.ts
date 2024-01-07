import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleados.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css'],
})
export class ProyectosComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  volverHome() {
    this.router.navigate(['']);
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

    this.router.navigate(['']);
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
}
