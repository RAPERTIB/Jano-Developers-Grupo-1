import {injectable, /* inject, */ BindingScope, Provider} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Keys } from '../Config/Keys';
import { Cliente, Credenciales } from '../models';
import { ClienteRepository } from '../repositories';
const generador = require("generate-password");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
/*
 * Fix the service type. Possible options can be:
 * - import {Autenticacion} from 'your-module';
 * - export type Autenticacion = string;
 * - export interface Autenticacion {}
 */

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(@repository (ClienteRepository)
    public repositorioCliente:ClienteRepository
    ) {}

   GeneradorPassword(){
      let password = generador.generate({
        length :8,
        numbers : true 
      });
      return password;
    }

    EncriptarPassword(password:string){
      let passwordE = cryptoJS.MD5(password);
      return passwordE;
      
    }

    IdentificarCliente(credenciales:Credenciales){
      try {
        let p = this.repositorioCliente.findOne({
          where:{correo:credenciales.usuario, clave:credenciales.password}
        });
        if(p){
          return p;
        }
        return false;
      } catch  {
        return false;
      }

    }

  GeneracionToken(cliente:Cliente){
    let token = jwt.sing({
      data:{
        id: cliente.id,
        correo: cliente.correo,
        nombre: cliente.primernombre + " " + cliente.primerapellido
      }
    }, Keys.claveJWT
    );

    return token;
  }

  ValidarToken(token:string){
    try {
      let datos = jwt.verify(token,Keys.claveJWT);
      return datos;
    } catch {
      return false;
    }
  }
  
  
}
