import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, of } from 'rxjs';

interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  correoElectronico:string;
}


@Injectable({
  providedIn: 'root'
})
export class DatosMockeadosService {

 constructor() {}
 
  private mockData = [
    { nombre: 'Maximiliano', apellido: 'Bogado', edad: 29 , correoElectronico:'maxi.bogado@gmail.com'},
    { nombre: 'Max', apellido: 'Bogadoo', edad: 39 , correoElectronico:'maxi.bogadoo@gmail.com' },
    {  nombre: 'Mat', apellido: 'Bot', edad: 49 , correoElectronico:'bot@gmail.com'}
  ];

  getData():  Observable<Persona[]> {
    return of (this.mockData);
  }

}
