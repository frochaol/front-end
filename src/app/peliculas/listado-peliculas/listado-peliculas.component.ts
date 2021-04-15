import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeliculaDTO } from 'src/app/pelicula/pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) { }
  // Recibe peliculas desde otro componente que llama a este gracias al Input()
  @Input()
  peliculas: PeliculaDTO[] | any;

  @Output()
  borrado: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    
  }

  borrar(peliculaId: number): void {
    this.peliculasService.borrar(peliculaId)
      .subscribe(() => {
        this.borrado.emit()
      });
  }



}
