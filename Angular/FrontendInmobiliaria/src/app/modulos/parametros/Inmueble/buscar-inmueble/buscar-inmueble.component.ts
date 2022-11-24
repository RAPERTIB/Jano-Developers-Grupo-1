import { Component, OnInit } from '@angular/core';
import { InmuebleModel } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';

@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.component.html',
  styleUrls: ['./buscar-inmueble.component.css']
})
export class BuscarInmuebleComponent implements OnInit {


  listaInmuebles:InmuebleModel[]=[];

  constructor(
    private servicioinmueble : InmuebleService
  ) { }

  ngOnInit(): void {
    this.Consultar();
  }

  Consultar(){
    this.servicioinmueble.ConsultarInmueble().subscribe({
      next: (datos:InmuebleModel[])=>{
        this.listaInmuebles = datos;
      },
      error:(e)=>console.log(e)
    });
  }

}
