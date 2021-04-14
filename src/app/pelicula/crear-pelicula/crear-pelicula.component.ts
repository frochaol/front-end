import { Component, OnInit } from '@angular/core';
import { cineDTO } from 'src/app/cines/cine';
import { generoDTO } from 'src/app/generos/genero';
import { PeliculasService } from 'src/app/peliculas/peliculas.service';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { PeliculaCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) { }

  errores: string[] = [];
  generosNoSeleccionados: MultipleSelectorModel[] = [];
  cinesNoSeleccionados: MultipleSelectorModel[] = [];
 
  ngOnInit(): void {
    this.peliculasService.postGet()
      .subscribe(resultado => {

        this.generosNoSeleccionados = resultado.generos.map(genero => {
          return <MultipleSelectorModel>{llave: genero.id, valor: genero.nombre}
        });

        this.cinesNoSeleccionados = resultado.cines.map(cine => {
          return <MultipleSelectorModel>{llave: cine.id, valor: cine.nombre}
        });
      }, error => console.error(error));
  }

  guardarCambios (pelicula: PeliculaCreacionDTO) {
    this.peliculasService.crear(pelicula)
      .subscribe(() => console.log('exitoso'),
      error =>  this.errores = parsearErroresAPI(error));
  }

}
