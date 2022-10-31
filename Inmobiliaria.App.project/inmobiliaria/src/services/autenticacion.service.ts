import {injectable, /* inject, */ BindingScope, Provider} from '@loopback/core';
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
/*
 * Fix the service type. Possible options can be:
 * - import {Autenticacion} from 'your-module';
 * - export type Autenticacion = string;
 * - export interface Autenticacion {}
 */
export type Autenticacion = unknown;

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionProvider implements Provider<Autenticacion> {
  constructor(/* Add @inject to inject parameters */) {}

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

  value() {
    // Add your implementation here
   
    throw new Error('To be implemented');
    
  }
}
