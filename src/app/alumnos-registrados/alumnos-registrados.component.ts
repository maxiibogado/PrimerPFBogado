import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatosMockeadosService } from '../datos-mockeados.service';
import { Subscription } from 'rxjs';

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
export class AlumnosRegistradosComponent implements OnInit,OnDestroy {
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'correoElectronico'];
  dataSource:Persona[];
  mensajeObservableSubscription$: Subscription ;
  

  constructor(private datosMockeadosService: DatosMockeadosService) {
    this.dataSource =[];
    this.mensajeObservableSubscription$ = new Subscription();

  }
  ngOnDestroy(): void {
    this.mensajeObservableSubscription$.unsubscribe();
  }

  ngOnInit(): void {
    this.mensajeObservableSubscription$ = this.datosMockeadosService.getData().subscribe(data => {
       this.dataSource = data;
    });
  }

  
}
