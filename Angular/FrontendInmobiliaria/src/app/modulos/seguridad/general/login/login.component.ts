import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredencialesUserModel } from 'src/app/modelos/credenciales-user.model';
import { SeguridadService } from 'src/app/servicios/comun/seguridad.service';
declare const GenerarVentanaModal: any;
const CryptoJS=require('crypto-js');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formularioDatos: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private servicicoSeguridad: SeguridadService

  ) { }

  ngOnInit(): void {
    this.ConstruccionFormulario();
  }
  
  ConstruccionFormulario(){
    this.formularioDatos=this.fb.group({
      user:["",[Validators.required,Validators.email]],
      pass:["",[Validators.required,Validators.minLength(8)]]

    });
  }

  Login(){
    if(this.formularioDatos.invalid){
      alert("Los datos ingresados no son validos");
    }else{
      let credenciales=new CredencialesUserModel();
      credenciales.usuario=this.formularioDatos.controls['usuario'].value;
      credenciales.password= CryptoJS.MD5(this.formularioDatos.controls['pass'].value).toString();
      this.servicicoSeguridad.Login(credenciales).subscribe({
        next: (datos:any)=>{
          console.log(datos);
        },
        error:(e)=>{
          console.log(e);
        }
      })
    }
  }

}


