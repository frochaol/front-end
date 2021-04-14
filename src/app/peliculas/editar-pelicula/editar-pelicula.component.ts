import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorPeliculaDTO } from 'src/app/actores/actor';
import { PeliculaCreacionDTO, PeliculaDTO } from 'src/app/pelicula/pelicula';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor(private peliculasService: PeliculasService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  modelo: PeliculaDTO | any;

  generosNoSeleccionados: MultipleSelectorModel[] = [];
  generosSeleccionados: MultipleSelectorModel[] = [];
  cinesNoSeleccionados: MultipleSelectorModel[] = [];
  cinesSeleccionados: MultipleSelectorModel[] = [];
  actoresSeleccionados: actorPeliculaDTO[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.peliculasService.putGet(params.id)
      .subscribe(peliculaPutGet => {
        this.modelo = peliculaPutGet.pelicula;

        this.generosNoSeleccionados = peliculaPutGet.generosNoSeleccionados.map(genero => {
          return <MultipleSelectorModel>{llave: genero.id, valor: genero.nombre}
        });

        this.generosSeleccionados = peliculaPutGet.generosSeleccionados.map(genero => {
          return <MultipleSelectorModel>{llave: genero.id, valor: genero.nombre}
        });

        this.cinesNoSeleccionados = peliculaPutGet.cinesNoSeleccionados.map(cine => {
          return <MultipleSelectorModel>{llave: cine.id, valor: cine.nombre}
        });

        this.cinesSeleccionados = peliculaPutGet.cinesSeleccionados.map(cine  => {
          return <MultipleSelectorModel>{llave: cine.id, valor: cine.nombre}
        });

        this.actoresSeleccionados = peliculaPutGet.actores;

      });
    })
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);
    this.peliculasService.editar(this.modelo.id, pelicula)
      .subscribe(() => this.router.navigate(['/pelicula/' + this.modelo.id]));
  }

}
