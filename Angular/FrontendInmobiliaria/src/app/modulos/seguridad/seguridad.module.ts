import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './general/login/login.component';
import { RecuperarPassComponent } from './general/recuperar-pass/recuperar-pass.component';
import { AsignarPassComponent } from './general/asignar-pass/asignar-pass.component';
import { CrearUserComponent } from './usuarios/crear-user/crear-user.component';
import { EditarUserComponent } from './usuarios/editar-user/editar-user.component';
import { ConsultarUserComponent } from './usuarios/consultar-user/consultar-user.component';
import { EliminarUserComponent } from './usuarios/eliminar-user/eliminar-user.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { ConsultarAsesorComponent } from './asesor/consultar-asesor/consultar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';
import { CrearAdmComponent } from './administrador/crear-adm/crear-adm.component';
import { EditarAdmComponent } from './administrador/editar-adm/editar-adm.component';
import { ConsultarAdmComponent } from './administrador/consultar-adm/consultar-adm.component';
import { EliminarAdmComponent } from './administrador/eliminar-adm/eliminar-adm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './general/logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecuperarPassComponent,
    AsignarPassComponent,
    CrearUserComponent,
    EditarUserComponent,
    ConsultarUserComponent,
    EliminarUserComponent,
    CrearAsesorComponent,
    EditarAsesorComponent,
    ConsultarAsesorComponent,
    EliminarAsesorComponent,
    CrearAdmComponent,
    EditarAdmComponent,
    ConsultarAdmComponent,
    EliminarAdmComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
