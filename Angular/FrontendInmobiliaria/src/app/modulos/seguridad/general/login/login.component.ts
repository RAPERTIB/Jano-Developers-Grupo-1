import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredencialesUserModel } from 'src/app/modelos/credenciales-user.model';
import { DatosSesionModel } from 'src/app/modelos/datos-sesion.model';
import { LocalStorageService } from 'src/app/servicios/comun/local-storage.service';
import { SeguridadService } from 'src/app/servicios/comun/seguridad.service';
const CryptoJS = require("crypto-js");
declare const GenerarVentanaModal: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formularioDatos: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private servicicoSeguridad: SeguridadService,
    private servicioLocalStrorage: LocalStorageService,
    private router:Router

    

  ) { }

  ngOnInit(): void {
    this.ConstruccionFormulario();
  }
  
  ConstruccionFormulario(){
    this.formularioDatos=this.fb.group({
      user:["",[Validators.required,Validators.email]],
      pass:["",[Validators.required,Validators.minLength(6)]]

    });
  }

  Login(){
    if(this.formularioDatos.invalid){
      alert ("Los datos ingresados no son validos");
    }else{
      let credenciales=new CredencialesUserModel();
      credenciales.usuario=this.formularioDatos.controls['user'].value;
      credenciales.password= CryptoJS.MD5(this.formularioDatos.controls['pass'].value).toString();
      this.servicicoSeguridad.Login(credenciales).subscribe({
        next: (datos:DatosSesionModel)=>{
          console.log(datos);
          let guardar=this.servicioLocalStrorage.GuardarDatosSesion(datos);
          datos.isLoggedIn=true;
          this.servicicoSeguridad.RefrescarDatosSesion(datos);  
          this.router.navigate(['/home']);
        },
        error:(e)=>{
          if(e==401){
            GenerarVentanaModal("Usuario o contraseña erroneos ")
          }
          console.log(e);
        }
      })
    }
  }

}


