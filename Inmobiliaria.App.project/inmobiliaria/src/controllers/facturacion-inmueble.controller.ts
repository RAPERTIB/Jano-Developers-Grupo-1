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
  Inmueble,
} from '../models';
import {FacturacionRepository} from '../repositories';

export class FacturacionInmuebleController {
  constructor(
    @repository(FacturacionRepository)
    public facturacionRepository: FacturacionRepository,
  ) { }

  @get('/facturacions/{id}/inmueble', {
    responses: {
      '200': {
        description: 'Inmueble belonging to Facturacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inmueble)},
          },
        },
      },
    },
  })
  async getInmueble(
    @param.path.string('id') id: typeof Facturacion.prototype.id,
  ): Promise<Inmueble> {
    return this.facturacionRepository.inmueble(id);
  }
}
