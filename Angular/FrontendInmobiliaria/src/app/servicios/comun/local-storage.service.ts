import { Injectable } from '@angular/core';
import { DatosSesionModel } from 'src/app/modelos/datos-sesion.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  GuardarDatosSesion(datos:DatosSesionModel):boolean{
    let datosActuales = localStorage.getItem("datossesion");
    if (datosActuales) {
      return false;
    }else {
      let datosSesionString = JSON.stringify(datos);
      localStorage.setItem("datossesion",datosSesionString);
      return true;
    }
  }

  EliminarDatosSesion(): boolean{
    let datosActuales=localStorage.getItem("datossesion");
    if(datosActuales){
      localStorage.removeItem("datossesion");
      return true;
    }else{
      return false;
    }
  }

  obtenerToken():string{
    let datosActuales=localStorage.getItem("datossesion");
    if (datosActuales) {
      let datosSesionJson=JSON.parse(datosActuales);
      return datosSesionJson.tk;
    }else {
      return "";
    }
  }

  ObtenerInfoSesion(): DatosSesionModel | null{
    let datosActuales=localStorage.getItem("datossesion");
    if (datosActuales) {
      let datosSesionJson=JSON.parse(datosActuales);
      return datosSesionJson;
    }else {
      return null;
    }
  }
}
