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
import { Cliente, Credenciales } from '../models';
import { ClienteRepository } from '../repositories';
import { UsuarioController } from './usuario.controller';
import { AutenticacionService } from '../services';
import { service } from '@loopback/core';
import { Keys } from '../Config/Keys';
const nodeFetch = require('node-fetch');
export class ClienteController {
  constructor(
    @repository(ClienteRepository)
    public clienteRepository: ClienteRepository,
    @service(AutenticacionService)
    public servicioAutenticacion:AutenticacionService
  ) { }

  @post('/clientes')
  @response(200, {
    description: 'Cliente model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Cliente) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {
            title: 'NewCliente',
            exclude: ['id'],
          }),
        },
      },
    })
    cliente: Omit<Cliente, 'id'>,
  ): Promise<Cliente> {
    let clave = this.servicioAutenticacion.GeneradorPassword();
    let clavecifrada = this.servicioAutenticacion.EncriptarPassword(clave);
    cliente.clave= clavecifrada;

    let p = await this.clienteRepository.create(cliente);
    
    //Notificacion al usuario

    let destino = p.correo;
    let asunto = "Registro en Hogar Colombia"
    let mensaje = `Hola, ${p.primernombre + p.primerapellido} su usuario de acceso es: ${p.correo} y su contraseña es: ${clave}`;

    nodeFetch(`${Keys.urlNotificaciones}/e-mail?correo-destino=${destino}&asunto=${asunto}&contenido=${mensaje}`)
    .then((data:any)=>{
    
    console.log(data);
    });
    return p; 
  }

  @get('/clientes/count')
  @response(200, {
    description: 'Cliente model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Cliente) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.clienteRepository.count(where);
  }

  @get('/clientes')
  @response(200, {
    description: 'Array of Cliente model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cliente, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Cliente) filter?: Filter<Cliente>,
  ): Promise<Cliente[]> {
    return this.clienteRepository.find(filter);
  }

  @patch('/clientes')
  @response(200, {
    description: 'Cliente PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, { partial: true }),
        },
      },
    })
    cliente: Cliente,
    @param.where(Cliente) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.clienteRepository.updateAll(cliente, where);
  }

  @get('/clientes/{id}')
  @response(200, {
    description: 'Cliente model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cliente, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cliente, { exclude: 'where' }) filter?: FilterExcludingWhere<Cliente>
  ): Promise<Cliente> {
    return this.clienteRepository.findById(id, filter);
  }

  @patch('/clientes/{id}')
  @response(204, {
    description: 'Cliente PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, { partial: true }),
        },
      },
    })
    cliente: Cliente,
  ): Promise<void> {
    await this.clienteRepository.updateById(id, cliente);
  }

  @put('/clientes/{id}')
  @response(204, {
    description: 'Cliente PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cliente: Cliente,
  ): Promise<void> {
    await this.clienteRepository.replaceById(id, cliente);
  }

  @del('/clientes/{id}')
  @response(204, {
    description: 'Cliente DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.clienteRepository.deleteById(id);
  }

  @post('/Login')
  @response(200, {
    description: "Identificacion de las personas"
  })
  async identificar(
    @requestBody() credenciales: Credenciales
  ){
    let p = await this.servicioAutenticacion.IdentificarCliente(credenciales);
    if (p) {
      let token = this.servicioAutenticacion.GeneracionToken(p);
      return {
        informacion: {
          nombre: p.primernombre,
          id: p.id
        },
        tk: token

      }
    }
  
  }

  @post('/recuperarPass')
  @response(200, {
    description: "Recuperacion de la contraseña del cliente"
  })
  async recuperarPass(
    @requestBody() email: string
  ): Promise<Boolean> {

    let p = await this.clienteRepository.findOne({
      where: {
        correo: email
      }
    });

    if (p) {
      let newpass = this.servicioAutenticacion.GeneradorPassword();
      let newpassEncrip = this.servicioAutenticacion.EncriptarPassword(newpass);
      p.clave = newpassEncrip;

      //mensaje al correo del cliente

      let destino = p.correo;
      let mensaje = `Hola ${p.primernombre} ${p.primerapellido}, usted a solicitado el restablecimiento de su cuenta, su nueva contraseña temporal es ${newpass}`;
      let asunto = "Restablecimiento de su contraseña -- Inmobiliaria -- HOGAR COLOMBIA --";

      nodeFetch(`${Keys.urlNotificaciones}/e-mail?correo-destino=${destino}&asunto=${asunto}&contenido=${mensaje}`).then((data: any) => {
        console.log(data);
      });
      return true;
    }
    return false;

  }

}


