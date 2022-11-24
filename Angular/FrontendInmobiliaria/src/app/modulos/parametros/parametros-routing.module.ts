import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarInmuebleComponent } from './Inmueble/buscar-inmueble/buscar-inmueble.component';
import { CrearInmuebleComponent } from './Inmueble/crear-inmueble/crear-inmueble.component';

const routes: Routes = [
  {
   path:"Inmueble",
    component: BuscarInmuebleComponent
  },
  {
    path:"crear",
    component: CrearInmuebleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
