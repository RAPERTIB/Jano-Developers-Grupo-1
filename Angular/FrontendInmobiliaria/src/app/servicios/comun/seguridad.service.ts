import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CredencialesUserModel } from 'src/app/modelos/credenciales-user.model';
import { DatosSesionModel } from 'src/app/modelos/datos-sesion.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url:string="http://localhost:3000";
  infoSesion: BehaviorSubject<DatosSesionModel> = new BehaviorSubject<DatosSesionModel>(new DatosSesionModel());

  constructor(
    private http:HttpClient,
    private servicioLocalStorage: LocalStorageService,
    
  ) {
    this.VerificarSesionActiva();
   }

  Login(credenciales:CredencialesUserModel):Observable<any>{

    return this.http.post(`${this.url}/Login`, credenciales)

  }

  VerificarSesionActiva(){
    let info=this.servicioLocalStorage.ObtenerInfoSesion ();
    if(info){
      info.isLoggedIn=true;
      this.RefrescarDatosSesion(info);
      return true;
    }else{
      return false;
    }
  }
  RefrescarDatosSesion(datos:DatosSesionModel){
    this.infoSesion.next(datos);
  }

  ObtenerInfoSesion(){
    return this.infoSesion. asObservable();
  }
}
