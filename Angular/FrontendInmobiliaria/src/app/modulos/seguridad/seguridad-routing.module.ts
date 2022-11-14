import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'src/app/public/error/error.component';
import { AsignarPassComponent } from './general/asignar-pass/asignar-pass.component';
import { LoginComponent } from './general/login/login.component';
import { RecuperarPassComponent } from './general/recuperar-pass/recuperar-pass.component';
import { CrearUserComponent } from './usuarios/crear-user/crear-user.component';

const routes: Routes = [
  {
    path:"Login",
    component: LoginComponent
  },
  {
    path:"registrese",
    component:CrearUserComponent
  },
  {
    path:"recuperar",
    component:RecuperarPassComponent
  },

  {
    path:"asignar-pass",
    component:AsignarPassComponent
  },

  {
    path:"**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
