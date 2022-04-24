import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Creartipocambiorequest } from '../models/creartipocambiorequest';
import {TipocambioService } from '../service/tipocambio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  tipoModificacion = "";
  nombreUsuario = "";
  fechaRegistro = "";

  monedaOrigen = "";
  monedaDestino = "";
  factorConversion = 0;

  constructor( 
    private tipocambioService: TipocambioService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onNuevo(): void {
    const creartipocambiorequest = new Creartipocambiorequest(this.tipoModificacion, this.nombreUsuario, this.fechaRegistro,
        this.monedaOrigen, this.monedaDestino, this.factorConversion);
    this.tipocambioService.nuevo(creartipocambiorequest).subscribe(
      data => {
        this.toastr.success('Tipo Cambio Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/list']);
      },
      err => {
        this.toastr.error(err.error.MensajeDTO, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}
