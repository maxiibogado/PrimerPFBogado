import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { NavbarComponent } from './navbar.component';

// Reactive
import { ReactiveFormsModule } from '@angular/forms';


//Angular Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';





@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  declarations: [NavbarComponent],
  exports:[NavbarComponent]
})
export class NavbarModule { }
