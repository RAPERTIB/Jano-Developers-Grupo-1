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
import {Admin, Credenciales} from '../models';
import {AdminRepository} from '../repositories';
import { AutenticacionService } from '../services';
import { Keys } from '../Config/Keys';
import { service } from '@loopback/core';
const nodeFetch = require('node-fetch')
export class AdminController {
  constructor(
    @repository(AdminRepository)
    public adminRepository : AdminRepository,
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService
  ) {}

  @post('/admins')
  @response(200, {
    description: 'Admin model instance',
    content: {'application/json': {schema: getModelSchemaRef(Admin)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Admin, {
            title: 'NewAdmin',
            exclude: ['id'],
          }),
        },
      },
    })
    admin: Omit<Admin, 'id'>,
  ): Promise<Admin> {
    let clave = this.servicioAutenticacion.GeneradorPassword();
    let clavecifrada = this.servicioAutenticacion.EncriptarPassword(clave);
    admin.clave = clavecifrada;

    let p = await this.adminRepository.create(admin);

    //Notificacion al usuario

    let destino = p.correo;
    let asunto = "Registro en Hogar Colombia"
    let mensaje = `Hola, ${p.primernombre + p.primerapellido} su usuario de acceso es: ${p.correo} y su contraseña es: ${clave}`;

    nodeFetch(`${Keys.urlNotificaciones}/e-mail?correo-destino=${destino}&asunto=${asunto}&contenido=${mensaje}`)
      .then((data: any) => {

        console.log(data);
      });
    return p; 
    
  }

  @get('/admins/count')
  @response(200, {
    description: 'Admin model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Admin) where?: Where<Admin>,
  ): Promise<Count> {
    return this.adminRepository.count(where);
  }

  @get('/admins')
  @response(200, {
    description: 'Array of Admin model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Admin, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Admin) filter?: Filter<Admin>,
  ): Promise<Admin[]> {
    return this.adminRepository.find(filter);
  }

  @patch('/admins')
  @response(200, {
    description: 'Admin PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Admin, {partial: true}),
        },
      },
    })
    admin: Admin,
    @param.where(Admin) where?: Where<Admin>,
  ): Promise<Count> {
    return this.adminRepository.updateAll(admin, where);
  }

  @get('/admins/{id}')
  @response(200, {
    description: 'Admin model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Admin, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Admin, {exclude: 'where'}) filter?: FilterExcludingWhere<Admin>
  ): Promise<Admin> {
    return this.adminRepository.findById(id, filter);
  }

  @patch('/admins/{id}')
  @response(204, {
    description: 'Admin PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Admin, {partial: true}),
        },
      },
    })
    admin: Admin,
  ): Promise<void> {
    await this.adminRepository.updateById(id, admin);
  }

  @put('/admins/{id}')
  @response(204, {
    description: 'Admin PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() admin: Admin,
  ): Promise<void> {
    await this.adminRepository.replaceById(id, admin);
  }

  @del('/admins/{id}')
  @response(204, {
    description: 'Admin DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.adminRepository.deleteById(id);
  }

  @post('/loginT')
  @response(200, {
    description: "Identificacion de las personas con el token"
  })
  async identificarToken(
    @requestBody() credenciales: Credenciales
  ) {

    let p = await this.servicioAutenticacion.IdentificarAdmin(credenciales);
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
    description: "Recuperacion de la contraseña del admin"
  })
  async recuperarPass(
    @requestBody() email: string
  ): Promise<Boolean> { 

    let p = await this.adminRepository.findOne({
      where: {
        correo: email
      }
    });

    if (p) {
      let newpass = this.servicioAutenticacion.GeneradorPassword();
      let newpassEncrip = this.servicioAutenticacion.EncriptarPassword(newpass);
      p.clave = newpassEncrip;

      //mensaje al correo del admin

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
