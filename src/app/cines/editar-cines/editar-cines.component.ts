import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cines',
  templateUrl: './editar-cines.component.html',
  styleUrls: ['./editar-cines.component.css']
})
export class EditarCinesComponent implements OnInit {

  constructor() { }

  modelo: cineDTO = {nombre: "Saga Falabella"};

  ngOnInit(): void {
  }

  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
  }

}
