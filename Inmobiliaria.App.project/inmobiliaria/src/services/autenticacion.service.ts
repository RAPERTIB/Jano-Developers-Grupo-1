import {injectable, /* inject, */ BindingScope, Provider} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Keys } from '../Config/Keys';
import { Admin, Asesor, Cliente, Credenciales } from '../models';
import { AdminRepository, AsesorRepository, ClienteRepository } from '../repositories';
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
  constructor(@repository (AdminRepository )
    public repositorioAdmin:AdminRepository,
    @repository(AsesorRepository)
    public repositorioAsesor: AsesorRepository,
    @repository(ClienteRepository)
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

    IdentificarAdmin(credenciales:Credenciales){
      try {
        let p = this.repositorioAdmin.findOne({
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

  IdentificarCliente(credenciales: Credenciales) {
    try {
      let p = this.repositorioCliente.findOne({
        where: { correo: credenciales.usuario, clave: credenciales.password }
      });
      if (p) {
        return p;
      }
      return false;
    } catch {
      return false;
    }

  }
  IdentificarAsesor(credenciales: Credenciales) {
    try {
      let p = this.repositorioAsesor.findOne({
        where: { correo: credenciales.usuario, clave: credenciales.password }
      });
      if (p) {
        return p;
      }
      return false;
    } catch {
      return false;
    }

  }

    GeneracionToken(cliente:Cliente){
      let token = jwt.sign({
        data:{
          id: cliente.id,
          correo: cliente.correo,
          nombre: cliente.primernombre + " " + cliente.primerapellido,
          rol: cliente.rol
        }
      }, Keys.claveJWT
      );

      return token;
    }

  GeneracionTokenAd(cliente: Admin) {
    let token = jwt.sign({
      data: {
        id: cliente.id,
        correo: cliente.correo,
        nombre: cliente.primernombre + " " + cliente.primerapellido,
        rol: cliente.rol
      }
    }, Keys.claveJWT
    );

    return token;
  }
  GeneracionTokenAs(cliente: Asesor) {
    let token = jwt.sign({
      data: {
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
