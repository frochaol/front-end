import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cines',
  templateUrl: './editar-cines.component.html',
  styleUrls: ['./editar-cines.component.css']
})
export class EditarCinesComponent implements OnInit {

  constructor() { }

  modelo: cineDTO = {nombre: "Saga Falabella", latitud: -16.398702139479262 , longitud: -71.54281318187725};

  ngOnInit(): void {
  }

  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
  }

}
