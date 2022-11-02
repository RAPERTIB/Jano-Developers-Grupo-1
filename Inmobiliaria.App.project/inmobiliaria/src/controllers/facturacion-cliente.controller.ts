import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Facturacion,
  Cliente,
} from '../models';
import {FacturacionRepository} from '../repositories';

export class FacturacionClienteController {
  constructor(
    @repository(FacturacionRepository)
    public facturacionRepository: FacturacionRepository,
  ) { }

  @get('/facturacions/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to Facturacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof Facturacion.prototype.id,
  ): Promise<Cliente> {
    return this.facturacionRepository.cliente(id);
  }
}
