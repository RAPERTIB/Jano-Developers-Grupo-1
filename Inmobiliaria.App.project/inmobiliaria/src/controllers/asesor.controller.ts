import { service } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import {Asesor, Credenciales} from '../models';
import {AsesorRepository} from '../repositories';
import { AutenticacionService } from '../services';
import { Keys } from '../Config/Keys';
const nodeFetch = require('node-fetch');
export class AsesorController {
  constructor(
    @repository(AsesorRepository)
    public asesorRepository : AsesorRepository,
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService
  ) {}

  @post('/asesores')
  @response(200, {
    description: 'Asesor model instance',
    content: {'application/json': {schema: getModelSchemaRef(Asesor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesor, {
            title: 'NewAsesor',
            exclude: ['id'],
          }),
        },
      },
    })
    asesor: Omit<Asesor, 'id'>,
  ): Promise<Asesor> {
    let clave = this.servicioAutenticacion.GeneradorPassword();
    let clavecifrada = this.servicioAutenticacion.EncriptarPassword(clave);
    asesor.clave = clavecifrada;

    let p = await this.asesorRepository.create(asesor);

    //Notificacion al asesor

    let destino = p.correo;
    let asunto = "Registro en Hogar Colombia"
    let mensaje = `Hola, ${p.primernombre + p.primerapellido} su usuario de acceso es: ${p.correo} y su contraseña es: ${clave}`;

    nodeFetch(`${Keys.urlNotificaciones}/e-mail?correo-destino=${destino}&asunto=${asunto}&contenido=${mensaje}`)
      .then((data: any) => {

        console.log(data);
      });
    return p; 
    
  }

  @get('/asesores/count')
  @response(200, {
    description: 'Asesor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Asesor) where?: Where<Asesor>,
  ): Promise<Count> {
    return this.asesorRepository.count(where);
  }

  @get('/asesores')
  @response(200, {
    description: 'Array of Asesor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Asesor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Asesor) filter?: Filter<Asesor>,
  ): Promise<Asesor[]> {
    return this.asesorRepository.find(filter);
  }

  @patch('/asesores')
  @response(200, {
    description: 'Asesor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesor, {partial: true}),
        },
      },
    })
    asesor: Asesor,
    @param.where(Asesor) where?: Where<Asesor>,
  ): Promise<Count> {
    return this.asesorRepository.updateAll(asesor, where);
  }

  @get('/asesores/{id}')
  @response(200, {
    description: 'Asesor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Asesor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Asesor, {exclude: 'where'}) filter?: FilterExcludingWhere<Asesor>
  ): Promise<Asesor> {
    return this.asesorRepository.findById(id, filter);
  }

  @patch('/asesores/{id}')
  @response(204, {
    description: 'Asesor PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesor, {partial: true}),
        },
      },
    })
    asesor: Asesor,
  ): Promise<void> {
    await this.asesorRepository.updateById(id, asesor);
  }

  @put('/asesores/{id}')
  @response(204, {
    description: 'Asesor PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() asesor: Asesor,
  ): Promise<void> {
    await this.asesorRepository.replaceById(id, asesor);
  }

  @del('/asesores/{id}')
  @response(204, {
    description: 'Asesor DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.asesorRepository.deleteById(id);
  }

  @post('/loginT')
  @response(200, {
    description: "Identificacion de las personas con el token"
  })
  async identificarToken(
    @requestBody() credenciales: Credenciales
  ) {

    let p = await this.servicioAutenticacion.IdentificarAsesor(credenciales);
    if (p) {
      let token = this.servicioAutenticacion.GeneracionToken(p);
      return {
        informacion: {
          nombre: p.primernombre,
          id: p.id
        },
        tk: token
      }
    } else {
      throw new HttpErrors[401]("Datos Invalidos")
    }
  }

  @post('/recuperarPass')
  @response(200, {
    description: "Recuperacion de la contraseña del asesor"
  })
  async recuperarPass(
    @requestBody() email:string
  ): Promise<Boolean>{

    let p = await this.asesorRepository.findOne({
      where:{
        correo: email
      }
    });

    if(p){
      let newpass = this.servicioAutenticacion.GeneradorPassword();
      let newpassEncrip = this.servicioAutenticacion.EncriptarPassword(newpass);
      p.clave = newpassEncrip;

      //mensaje al correo del asesor

      let destino = p.correo;
      let mensaje = `Hola ${p.primernombre} ${p.primerapellido}, usted a solicitado el restablecimiento de su cuenta, su nueva contraseña temporal es ${newpass}`;
      let asunto = "Restablecimiento de su contraseña -- Inmobiliaria -- HOGAR COLOMBIA --";

      nodeFetch(`${Keys.urlNotificaciones}/e-mail?correo-destino=${destino}&asunto=${asunto}&contenido=${mensaje}`).then((data:any)=>{
        console.log(data);
      });
      return true;
    }
    return false;

  }

  @post("/cambiarPass")
  @response(200,{
      description: "Cambio de la contraseña despues de su asignacion"
  })
  async cambiarContraseña(

    @requestBody() email:string

  ){

  }

}
