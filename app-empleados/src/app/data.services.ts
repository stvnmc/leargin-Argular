import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleados.model';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  cargarEmpleados(): Observable<Empleado[]> {
    const token = this.loginService.getIdToken();

    return this.httpClient.get<Empleado[]>(
      'https://mis-clientes-84473-default-rtdb.firebaseio.com/datos.json?auth=' +
        token
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

  eliminarEmpleado(indice: number) {
    let url =
      'https://mis-clientes-84473-default-rtdb.firebaseio.com/datos/' +
      indice +
      '.json';

    this.httpClient.delete(url).subscribe(
      (response) =>
        console.log(
          'Se han elimanado  correctamente el empleados : ' + response
        ),
      (error) => console.log('Error' + error)
    );
  }
  actulizarEmpleado(indice: number, empleado: Empleado) {
    let url =
      'https://mis-clientes-84473-default-rtdb.firebaseio.com/datos/' +
      indice +
      '.json';

    this.httpClient.put(url, empleado).subscribe(
      (response) =>
        console.log(
          'Se han modificado correctamente el empleados : ' + response
        ),
      (error) => console.log('Error' + error)
    );
  }
}
