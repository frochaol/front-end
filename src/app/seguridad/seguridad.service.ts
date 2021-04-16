import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { credencialesUsuario, respuestaAutenticacion } from './seguridad';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private httpClient: HttpClient) { }

  apiURL = environment.apiURL + 'cuentas';

  estaLogueado(): boolean {
    return false;
  }

  obtenerRol(): string {
    return 'admin';
  }

  registrar(credenciales: credencialesUsuario): Observable<respuestaAutenticacion>
  {
    return this.httpClient.post<respuestaAutenticacion>(this.apiURL + '/crear', credenciales)
  }
}
