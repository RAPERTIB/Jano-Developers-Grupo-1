import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { CrearFacturaComponent } from './facturacion/crear-factura/crear-factura.component';
import { EditarFacturaComponent } from './facturacion/editar-factura/editar-factura.component';
import { ListarFacturaComponent } from './facturacion/listar-factura/listar-factura.component';
import { EliminarFacturaComponent } from './facturacion/eliminar-factura/eliminar-factura.component';


@NgModule({
  declarations: [
    CrearFacturaComponent,
    EditarFacturaComponent,
    ListarFacturaComponent,
    EliminarFacturaComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
