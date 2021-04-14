import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { Coordenada, CoordenadaConMensaje } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  @Input()
  coordenadasIniciales: CoordenadaConMensaje[] | any;

  @Input()
  soloLecutra: boolean = false;

  @Output()
  coordenadaSeleccionada: EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map((valor: any) => {
      let marcador = marker([valor.latitud, valor.longitud]);
      if (valor.mensaje) {
        marcador.bindPopup(valor.mensaje, {autoClose: false, autoPan: false})
      }
      return marcador;
    });
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(-16.399715454897578, -71.5364456176758)
  };

  capas: Marker<any>[] = [];

  manejarClick(event: LeafletMouseEvent) {
    if (!this.soloLecutra) {
      const latitud = event.latlng.lat;
      const longitud = event.latlng.lng;
      this.capas = [];
      this.capas.push(marker([latitud, longitud]));
      this.coordenadaSeleccionada.emit({latitud: latitud, longitud: longitud});
    }    
  }
}
