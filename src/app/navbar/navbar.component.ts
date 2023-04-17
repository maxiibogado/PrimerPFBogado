import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showFiller = false;
  datos: any[] = [];

  columnas: string[] = ['nombre', 'apellido', 'dni', 'email' , 'nombreCompleto'];
  dataSource = new MatTableDataSource(this.datos);

  cargarDatos() {
    const datosGuardados = localStorage.getItem('alumnos');
    if (datosGuardados) {
      this.datos = JSON.parse(datosGuardados);
      this.dataSource.data = this.datos;
    }
  }
  


  miFormulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.miFormulario = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required,Validators.minLength(3)])],
      apellido: ['', Validators.compose([Validators.required,Validators.minLength(3)])],
      dni: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]{8}$/),Validators.maxLength(8)])],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });

    this.cargarDatos();
  }

  agregarDatos(): void {
    if (this.miFormulario.valid) {
      const nuevoElemento = {
        nombre: this.miFormulario.get('nombre')?.value,
        apellido: this.miFormulario.get('apellido')?.value,
        dni: this.miFormulario.get('dni')?.value,
        email: this.miFormulario.get('email')?.value
      };
      this.datos.push(nuevoElemento);
      this.dataSource.data = this.datos;
      this.dataSource._updateChangeSubscription(); // esto fuerza la actualización de la tabla
      localStorage.setItem('alumnos', JSON.stringify(this.datos)); // guardamos datos en el localStorage
      this.miFormulario.reset(); // esto resetea los campos del formulario
    }
  }

  borrarDatos():void{
    this.miFormulario.reset(); // esto resetea los campos del formulario
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


