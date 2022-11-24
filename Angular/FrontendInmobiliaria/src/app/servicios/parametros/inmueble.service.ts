import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InmuebleModel } from 'src/app/modelos/inmueble.modelo';
import { LocalStorageService } from '../comun/local-storage.service';
import{ SeguridadService} from '../comun/seguridad.service'

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  tk:string = this.servicioLocal.obtenerToken();
  constructor(
    private http: HttpClient,
    private servicioSeguridad: SeguridadService,
    private servicioLocal: LocalStorageService
    ) { 
    
  }

  ConsultarInmueble():Observable<InmuebleModel[]>{
    return this.http.get<InmuebleModel[]>(`${this.servicioSeguridad.url}/inmuebles`);
  }

  CrearInmueble(inmueble: InmuebleModel):Observable<InmuebleModel>{
    return this.http.post<InmuebleModel>(`${this.servicioSeguridad.url}/inmuebles`,
    {
      inmueble
    },
    {
      headers: new HttpHeaders({
        Authorizacion: `Bearer ${this.tk}`
      })
    }
    );

  }


}
