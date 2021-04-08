import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private generosService: GenerosService) { }

  generos: generoDTO[] | any;
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros: any;
  paginaActual: number = 1 ;
  cantidadRegistrosAMostrar: number = 5;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar: any)
  {
    this.generosService.obtenerTodos(pagina, cantidadElementosAMostrar)
      .subscribe((respuesta: HttpResponse<generoDTO>) => {
        this.generos = respuesta.body;
        this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
      }, error => console.error(error));
  } 

  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number) {
    this.generosService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }

}
