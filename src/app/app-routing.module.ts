import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleMonedaComponent } from './moneda/detalle-moneda.component';
import { EditarMonedaComponent } from './moneda/editar-moneda.component';
import { ListaMonedaComponent } from './moneda/lista-moneda.component';
import { NuevoMonedaComponent } from './moneda/nuevo-moneda.component';

import { NuevoComponent } from './tipocambio/nuevo.component';
import { ConversorComponent } from './tipocambio/conversor.component';
import { ListarComponent } from './tipocambio/listar.component';


const routes: Routes = [
  {path: '', component: ListaMonedaComponent},
  {path: 'detalle/:codigo', component: DetalleMonedaComponent},
  {path: 'nuevo', component: NuevoMonedaComponent},
  {path: 'editar/:idMoneda', component: EditarMonedaComponent},

  {path: 'create', component: NuevoComponent},
  {path: 'convertirMoneda', component: ConversorComponent},
  {path: 'list', component: ListarComponent},
  
  {path: '**', redirectTo: '',pathMatch: 'full' },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
