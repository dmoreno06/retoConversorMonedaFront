import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMonedaComponent } from './moneda/lista-moneda.component';
import { DetalleMonedaComponent } from './moneda/detalle-moneda.component';
import { NuevoMonedaComponent } from './moneda/nuevo-moneda.component';
import { EditarMonedaComponent } from './moneda/editar-moneda.component';

import { ListarComponent } from './tipocambio/listar.component';
import { NuevoComponent } from './tipocambio/nuevo.component';
import { ConversorComponent } from './tipocambio/conversor.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ListaMonedaComponent,
    DetalleMonedaComponent,
    NuevoMonedaComponent,
    EditarMonedaComponent,
    
    ListarComponent,
    NuevoComponent,
    ConversorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
