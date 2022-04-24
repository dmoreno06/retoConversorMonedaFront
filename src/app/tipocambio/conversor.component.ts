import { Component, OnInit } from '@angular/core';
import { Convertirmonedaresponse } from '../models/convertirmonedaresponse';
import { Convertirmonedarequest } from '../models/convertirmonedarequest';
import {TipocambioService } from '../service/tipocambio.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  tipoModificacion = "";
  nombreUsuario = "";
  fechaRegistro = "";

  monedaOrigen = "";
  monedaDestino = "";
  montoaConvertir = 0;

  monedaDestinoResponse = "";
  montoConvertidoResponse =0;
  convertirmonedaresponse!: Convertirmonedaresponse;
  
  router: any;

  constructor(
    private tipocambioService: TipocambioService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onNuevo(): void{
    const convertirmonedarequest = new Convertirmonedarequest(this.tipoModificacion, this.nombreUsuario, this.fechaRegistro,
      this.monedaOrigen, this.monedaDestino, this.montoaConvertir);
    this.tipocambioService.conversor(convertirmonedarequest).subscribe(
      data =>{
        this.convertirmonedaresponse = data;
        this.monedaDestinoResponse =this.convertirmonedaresponse.monedaDestino;
        this.montoConvertidoResponse =this.convertirmonedaresponse.montoConvertido;
        
        
        console.log(this.convertirmonedaresponse );
        
      },
      err =>{
        console.log(err);
      }
    );
  }

}
