import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearClientesComponent } from './clientes/crear-clientes/crear-clientes.component';
import { EditarClientesComponent } from './clientes/editar-clientes/editar-clientes.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { EliminarClientesComponent } from './clientes/eliminar-clientes/eliminar-clientes.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { CrearComponent } from './solicitud/crear/crear.component';
import { EditarComponent } from './solicitud/editar/editar.component';
import { ListarComponent } from './solicitud/listar/listar.component';
import { EliminarComponent } from './solicitud/eliminar/eliminar.component';


@NgModule({
  declarations: [
    CrearClientesComponent,
    EditarClientesComponent,
    ListarClientesComponent,
    EliminarClientesComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    ListarInmuebleComponent,
    EliminarInmuebleComponent,
    CrearComponent,
    EditarComponent,
    ListarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
