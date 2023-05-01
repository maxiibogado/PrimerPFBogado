import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { NavbarComponent } from './abm-alumnos.component';

// Reactive
import { ReactiveFormsModule } from '@angular/forms';


//Angular Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { FullNamePipe } from './full-name.pipe';






@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  declarations: [NavbarComponent,FullNamePipe],
  exports:[NavbarComponent,FullNamePipe]
})
export class NavbarModule { }
