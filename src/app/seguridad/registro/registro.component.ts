import { Component, OnInit } from '@angular/core';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
  }
  errores: string [] = [];

  registrar(credenciales: credencialesUsuario){
    this.seguridadService.registrar(credenciales)
      .subscribe(respuesta =>{
        console.log(respuesta);
      }, errores => this.errores = parsearErroresAPI(errores));
  }

}
