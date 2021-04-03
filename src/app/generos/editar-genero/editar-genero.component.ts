import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoEditarDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router: Router) { }
  modelo: generoEditarDTO | any = {nombre: 'Drama'};

  ngOnInit(): void { }

  editarRegistro(genero: generoEditarDTO) {
    console.log(genero);
    this.router.navigate(['/generos']);
  }

}
