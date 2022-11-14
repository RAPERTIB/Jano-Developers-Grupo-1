import {Entity, model, property, hasMany} from '@loopback/repository';
import {Asesor} from './asesor.model';
import {Inmueble} from './inmueble.model';

@model()
export class Admin extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  primernombre: string;

  @property({
    type: 'string',
    required: true,
  })
  segundonombre: string;

  @property({
    type: 'string',
    required: true,
  })
  primerapellido: string;

  @property({
    type: 'string',
    required: true,
  })
  segundoapellido: string;

  @property({
    type: 'string',
    required: true,
  })
  documento: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: false,
  })
  clave?: string;

  @property({
    type: 'string',
    required: false,
  })
  rol?: string;

  @hasMany(() => Asesor)
  asesors: Asesor[];

  @hasMany(() => Inmueble)
  inmuebles: Inmueble[];

  constructor(data?: Partial<Admin>) {
    super(data);
  }
}

export interface AdminRelations {
  // describe navigational properties here
}

export type AdminWithRelations = Admin & AdminRelations;
