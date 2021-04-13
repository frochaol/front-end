import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { cineCreacionDTO, cineDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-editar-cines',
  templateUrl: './editar-cines.component.html',
  styleUrls: ['./editar-cines.component.css']
})
export class EditarCinesComponent implements OnInit {

  constructor(private router: Router, 
    private cinesService: CinesService,
    private activatedRoute: ActivatedRoute) { }

  modelo: cineDTO | any;
  errores: string[] = [];

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      this.cinesService.obtenerPorId(params.id)
      .subscribe((cine: any) => {
        this.modelo = cine;
      },() => this.router.navigate(['/cines']))
    });
   }

  guardarCambios(cine: cineCreacionDTO) {
    this.cinesService.editar(this.modelo.id, cine)
    .subscribe(() => {
      this.router.navigate(['/cines']);
    }, error => this.errores =parsearErroresAPI(error));    
  }

}
