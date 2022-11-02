import { AuthenticationStrategy } from "@loopback/authentication";
import { Request, RedirectRoute, HttpErrors } from "@loopback/rest";
import { UserProfile } from "@loopback/security";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import parseBearerToken from "parse-bearer-token";
import { AutenticacionService } from "../services";
import { service } from "@loopback/core";
export class EstrategiaAdmin implements AuthenticationStrategy{
    name:string = "admin";
    constructor(
        @service (AutenticacionService)
        public autenticacionService:AutenticacionService){}

    async authenticate(request: Request): Promise<UserProfile | undefined> {
        let token = parseBearerToken(request);
        if(token){
            let datos = this.autenticacionService.ValidarToken(token);
            if(datos){
                if(datos.data.rol=="Administrador"){
                    let perfil: UserProfile = Object.assign({
                        nombre: datos.data.nombre
                    });
                    return perfil; 
                }else{
                    throw new HttpErrors[401]("Tiene el token pero no el permiso");
                }
                 
            }else{
                throw new HttpErrors[401]("Tiene el token pero no es valido.")
            }
        }else{
            throw new HttpErrors[401]("No hay token en esta solicitud");
        }
    }
} 