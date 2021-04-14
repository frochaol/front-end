import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDTO } from 'src/app/pelicula/pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }
  // Recibe peliculas desde otro componente que llama a este gracias al Input()
  @Input()
  peliculas: PeliculaDTO[] | any;

  ngOnInit(): void {
    
  }

  remover(indicePelicula: number): void {
    this.peliculas.splice(indicePelicula, 1);
  }

}
