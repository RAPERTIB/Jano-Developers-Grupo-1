import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InmuebleModel } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {

  formInmueble: FormGroup = new FormGroup({});


  constructor(
    private fb : FormBuilder,
    private servicioInmueble: InmuebleService
  ) { }

  ngOnInit(): void {
  }

  ConstruccionFormulario(){
    this.formInmueble= this.fb.group({
      propietario:["",[Validators.required]],
      tipo:["",[Validators.required]],
      caracteristicas: ["", [Validators.required]],
      precio: [, [Validators.required]],
      estado: ["", [Validators.required]],
      tipo_oferta: ["", [Validators.required]],
      porcentajeParticipacion: [ , [Validators.required]],
      direccion: ["", [Validators.required]],
      ciudad: ["", [Validators.required]],
      departamento: ["", [Validators.required]],
      contacto_Propietario:["", [Validators.required]],
      imagen:["",[Validators.required]]
    })
  }
  CrearInmueble(){
    if( this.formInmueble.invalid){
      console.log("Error");
    }else{
      let inmueble= new InmuebleModel();
      inmueble.imagenes =this.formInmueble.controls['imagen'].value;
      inmueble.propetario =this.formInmueble.controls['propietario'].value;
      inmueble.tipo = this.formInmueble.controls['tipo'].value;
      inmueble.caracteristicas = this.formInmueble.controls['caracteristicas'].value;
      inmueble.precio = this.formInmueble.controls['precio'].value;
      inmueble.estado = this.formInmueble.controls['estado'].value;
      inmueble.tipo_oferta = this.formInmueble.controls['tipo_oferta'].value;
      inmueble.porcentajeParticipacion = this.formInmueble.controls['porcentajeParticipacion'].value;
      inmueble.direccion = this.formInmueble.controls['direccion'].value;
      inmueble.ciudad = this.formInmueble.controls['ciudad'].value;
      inmueble.departamento = this.formInmueble.controls['departamento'].value;
      inmueble.contacto_Propietario = this.formInmueble.controls['contacto_Propietario'].value;
      this.servicioInmueble.CrearInmueble(inmueble).subscribe({
        next: (datos: InmuebleModel)=>{

        },
        error: (e)=> console.log(e)
      });
    }
  }

}
