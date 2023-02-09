import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { ModificarAlumnoComponent } from '../abm-alumno/modificar-alumno/modificar-alumno.component';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class ListaAlumnoComponent {

  alumnos: Alumno[] = [
    {nombre: 'Juan', apellido: 'Rodriguez', curso: 'Angular', comision: 100, email: 'juanrodri@gmail.com'},
    {nombre: 'Mario', apellido: 'Garcia', curso: 'Javascript', comision: 101, email: 'garcia_mario@gmail.com'},
    {nombre: 'Ana', apellido: 'Lopez', curso: 'Python', comision: 103, email: 'ana1lopez@gmail.com'},
    {nombre: 'Carlos', apellido: 'Martinez', curso: 'Diseño UX', comision: 105, email: 'carlistosm@gmail.com'},
    {nombre: 'Jose', apellido: 'Hernandez', curso: 'Angular', comision: 100, email: 'josehernandez@gmail.com'},
    {nombre: 'Laura', apellido: 'Perez', curso: 'SQL', comision: 108, email: 'lauperez@gmail.com'},
    {nombre: 'Pedro', apellido: 'Sanchez', curso: 'Javascript', comision: 101, email: 'pepesanchez@gmail.com'}
  ];

  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  columnas: string[] = ['usuario', 'curso', 'comision', 'email', 'acciones'];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  abrirModal(element: Alumno){
    const dialogRef = this.dialog.open(ModificarAlumnoComponent, {
      data: element
    });
  }


}
