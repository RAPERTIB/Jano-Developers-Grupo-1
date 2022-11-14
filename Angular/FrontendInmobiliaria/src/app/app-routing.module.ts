import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './public/error/error.component';
import { IndexComponent } from './public/index/index.component';

const routes: Routes = [
  {
    path:"home",
    component:IndexComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/home"
  },

  {
    path:"seguridad",
    loadChildren:()=> import("./modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
  },

  {
    path:"**",
    component:ErrorComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
