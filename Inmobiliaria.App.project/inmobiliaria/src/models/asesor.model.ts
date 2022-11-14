import {Entity, model, property, hasMany} from '@loopback/repository';
import {Inmueble} from './inmueble.model';

@model()
export class Asesor extends Entity {
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
  codigoUnico: string;
  @property({
    type: 'string',
    required: false,
  })
  clave?: string;

  @hasMany(() => Inmueble)
  inmuebles: Inmueble[];

  @property({
    type: 'string',
  })
  adminId?: string;

  constructor(data?: Partial<Asesor>) {
    super(data);
  }
}

export interface AsesorRelations {
  // describe navigational properties here
}

export type AsesorWithRelations = Asesor & AsesorRelations;
