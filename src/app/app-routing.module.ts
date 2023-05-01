import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosRegistradosComponent } from './alumnos-registrados/alumnos-registrados.component';
import { NavbarComponent } from './abm-alumnos/abm-alumnos.component';


const routes: Routes = [
  { path: 'alumnos-registrados', component: AlumnosRegistradosComponent },
  { path: 'agregarAlumno', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
