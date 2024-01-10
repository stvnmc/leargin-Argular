import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { ContactoCComponent } from './contacto-c/contacto-c.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';
import { DataServices } from './data.services';
import {HttpClientModule} from '@angular/common/http'

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'proyectos', component: ProyectosComponentComponent },
  { path: 'quien', component: QuienSoyComponent },
  { path: 'contacto', component: ContactoCComponent },
  { path: 'actualiza/:id', component: ActualizaComponentComponent },
  { path: '**', component: ErrorPersonalizadoComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienSoyComponent,
    ContactoCComponent,
    ActualizaComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
