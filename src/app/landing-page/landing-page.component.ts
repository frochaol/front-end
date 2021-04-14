import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../pelicula/pelicula';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) { }
  peliculasEnCines: PeliculaDTO[] | any;
  peliculasProximosEstrenos: PeliculaDTO[] | any;

  ngOnInit(): void {
    this.peliculasService.obtenerLandingPage()
      .subscribe(landingPage => {
        this.peliculasEnCines = landingPage.enCines;
        this.peliculasProximosEstrenos = landingPage.proximosEstrenos;
      })
  }

  

}
