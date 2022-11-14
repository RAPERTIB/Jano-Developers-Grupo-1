import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredencialesUserModel } from 'src/app/modelos/credenciales-user.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url:string="http://localhost:3000";

  constructor(
    private http:HttpClient
  ) { }

  Login(credenciales:CredencialesUserModel):Observable<any>{

    return this.http.post(`${this.url}/Login`, credenciales)

  }
}
