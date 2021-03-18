import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-end';
  ngOnInit(): void {
    this.peliculasEnCines = 
    [
      {
      titulo: 'Spider-Man - Far From Home',
      fechaLanzamiento: new Date(),
      precio: 1400.99
          },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2020-11-12'),
        precio: 30.99
      }
    ];

    this.peliculasProximosEstrenos = 
    [
      // {
      //   titulo: 'Iron Man',
      //   fechaLanzamiento: new Date(),
      //   precio: 1400.99
      // },
      
      // {
      //   titulo: 'Dunkerque',
      //   fechaLanzamiento: new Date('2020-11-12'),
      //   precio: 30.99
      // },

      // {
      //   titulo: 'Gaa',
      //   fechaLanzamiento: new Date('2020-11-12'),
      //   precio: 10.90
      // }
    ];
  }

  peliculasEnCines: { titulo: string; fechaLanzamiento: Date; precio: number; }[] | any;
  peliculasProximosEstrenos: { titulo: string; fechaLanzamiento: Date; precio: number; }[] | any;

}
