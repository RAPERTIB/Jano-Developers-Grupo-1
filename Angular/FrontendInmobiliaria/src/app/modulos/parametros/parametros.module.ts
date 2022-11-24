import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearClientesComponent } from './Clientes/crear-clientes/crear-clientes.component';
import { EditarClientesComponent } from './Clientes/editar-clientes/editar-clientes.component';
import { ListarClientesComponent } from './Clientes/listar-clientes/listar-clientes.component';
import { EliminarClientesComponent } from './Clientes/eliminar-clientes/eliminar-clientes.component';
import { CrearInmuebleComponent } from './Inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './Inmueble/editar-inmueble/editar-inmueble.component';
import { ListarInmuebleComponent } from './Inmueble/listar-inmueble/listar-inmueble.component';
import { EliminarInmuebleComponent } from './Inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { CrearComponent } from './solicitud/crear/crear.component';
import { EditarComponent } from './solicitud/editar/editar.component';
import { ListarComponent } from './solicitud/listar/listar.component';
import { EliminarComponent } from './solicitud/eliminar/eliminar.component';
import { BuscarInmuebleComponent } from './Inmueble/buscar-inmueble/buscar-inmueble.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    EliminarComponent,
    BuscarInmuebleComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametrosModule { }
