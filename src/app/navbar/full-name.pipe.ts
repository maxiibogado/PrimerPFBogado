import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
  const nombre = value.nombre;
  const apellido = value.apellido;
  return `${nombre} ${apellido}`;
  }

}
