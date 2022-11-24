import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosSesionModel } from 'src/app/modelos/datos-sesion.model';
import { SeguridadService } from 'src/app/servicios/comun/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sesionActiva: boolean=false;
  subscription: Subscription= new Subscription ();

  constructor(
    private servicioSeguridad: SeguridadService
  ) { }

  ngOnInit(): void {
    this.EstadoSesion();
  }

  EstadoSesion(){
    this.subscription=this.servicioSeguridad.ObtenerInfoSesion().subscribe({
      next:(data:DatosSesionModel)=>{
        this.sesionActiva = data.isLoggedIn;
      },
      error: (e:any)=>{

      }
    })
  }

}
