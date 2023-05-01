import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { AlumnosRegistradosComponent } from './alumnos-registrados.component';

@NgModule({
  declarations: [AlumnosRegistradosComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule
  ],
  exports:[AlumnosRegistradosComponent]

})
export class AlumnosRegistradosModule { }
