import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from 'src/app/pelicula/pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO | any;

  ngOnInit(): void {
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);
  }

}
