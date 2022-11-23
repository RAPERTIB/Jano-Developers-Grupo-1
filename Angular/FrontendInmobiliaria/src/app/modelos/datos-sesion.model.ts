import { DatosUserModel } from "./datos-user.model";

export class DatosSesionModel {
    tk?: string;
    info?: DatosUserModel;
    isLoggedIn:boolean=false;

}
 