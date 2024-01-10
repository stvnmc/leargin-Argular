import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleados.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  cargarEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(
      'https://mis-clientes-84473-default-rtdb.firebaseio.com/datos.json'
    );
  }

  guardarEmpleados(empleados: Empleado[]) {
    this.httpClient
      .put(
        'https://mis-clientes-84473-default-rtdb.firebaseio.com/datos.json',
        empleados
      )
      .subscribe(
        (response) => console.log('Se han guadado los empleados : ' + response),
        (error) => console.log('Error' + error)
      );
  }
}
