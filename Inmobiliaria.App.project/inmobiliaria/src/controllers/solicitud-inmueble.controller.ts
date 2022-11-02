import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Solicitud,
  Inmueble,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudInmuebleController {
  constructor(
    @repository(SolicitudRepository)
    public solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/inmueble', {
    responses: {
      '200': {
        description: 'Inmueble belonging to Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inmueble)},
          },
        },
      },
    },
  })
  async getInmueble(
    @param.path.string('id') id: typeof Solicitud.prototype.id,
  ): Promise<Inmueble> {
    return this.solicitudRepository.inmueble(id);
  }
}
