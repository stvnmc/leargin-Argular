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
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  {
    path: 'proyectos',
    component: ProyectosComponentComponent,
    canActivate: [LoginGuardian],
  },
  { path: 'quien', component: QuienSoyComponent, canActivate: [LoginGuardian] },
  {
    path: 'contacto',
    component: ContactoCComponent,
    canActivate: [LoginGuardian],
  },
  {
    path: 'actualiza/:id',
    component: ActualizaComponentComponent,
    canActivate: [LoginGuardian],
  },
  { path: 'login', component: LoginComponent },
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
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    ServicioEmpleadosService,
    EmpleadosService,
    DataServices,
    LoginService,
    CookieService,
    LoginGuardian,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
