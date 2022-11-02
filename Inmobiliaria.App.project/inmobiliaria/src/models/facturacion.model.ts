import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Inmueble} from './inmueble.model';

@model()
export class Facturacion extends Entity {
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
  tipoCuenta: string;

  @property({
    type: 'string',
    required: true,
  })
  numeroCuenta: string;

  @property({
    type: 'string',
    required: true,
  })
  banco: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  precioTotal: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaLimite: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  @belongsTo(() => Inmueble)
  inmuebleId: string;

  constructor(data?: Partial<Facturacion>) {
    super(data);
  }
}

export interface FacturacionRelations {
  // describe navigational properties here
}

export type FacturacionWithRelations = Facturacion & FacturacionRelations;
