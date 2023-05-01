import { Component, OnInit } from '@angular/core';
import { DatosMockeadosService } from '../datos-mockeados.service';

interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  correoElectronico: string;
}

@Component({
  selector: 'app-alumnos-registrados',
  templateUrl: './alumnos-registrados.component.html',
  styleUrls: ['./alumnos-registrados.component.css']
})
export class AlumnosRegistradosComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'correoElectronico'];
  dataSource:Persona[];


  constructor(private datosMockeadosService: DatosMockeadosService) {
    this.dataSource =[];
  }

  ngOnInit(): void {
    this.datosMockeadosService.getData().subscribe(data => {
       this.dataSource = data;
    });
  }
}
