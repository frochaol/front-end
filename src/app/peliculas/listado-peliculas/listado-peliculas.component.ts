import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }
  // Recibe peliculas desde otro componente que llama a este gracias al Input()
  @Input()
  peliculas: { 
    titulo: string; 
    fechaLanzamiento: Date; 
    precio: number; }[] | any;

  ngOnInit(): void {
    
  }

  remover(indicePelicua: number): void {
    this.peliculas.splice(indicePelicua, 1);
  }

}
