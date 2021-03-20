import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  title = 'front-end';
  ngOnInit(): void {
    this.peliculasEnCines = 
    [
      {
      titulo: 'Spider-Man - Far From Home',
      fechaLanzamiento: new Date(),
      precio: 1400.99,      
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2YHczYT4I-YQDqkYrOS48dCH1gWjETBntQ&usqp=CAU'
          },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2020-11-12'),
        precio: 30.99,
        poster: 'https://play-lh.googleusercontent.com/AhS9Fu-BodjCEkNGM3eelhgdwexK1oAEWzZXS2GKB0S4ILPU2CG-1ZayIuUhi8uOD8k'
      }
    ];

    this.peliculasProximosEstrenos = 
    [
      {
        titulo: 'Iron Man',
        fechaLanzamiento: new Date(),
        precio: 1400.99
      },
      
      {
        titulo: 'Dunkerque',
        fechaLanzamiento: new Date('2020-11-12'),
        precio: 30.99
      },

      {
        titulo: 'Gaa',
        fechaLanzamiento: new Date('2020-11-12'),
        precio: 10.90
      }
    ];
  }

  peliculasEnCines: [] | any;
  peliculasProximosEstrenos: [] | any;

}
