import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleados.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css'],
})
export class EmpleadoHijoCComponent implements OnInit {
  ngOnInit(): void {}

  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;

  arrayCaracteriscas = [''];
  agregarCaractetistica(nuevaCaracteristica: string) {
    this.arrayCaracteriscas.push(nuevaCaracteristica);
  }
}
