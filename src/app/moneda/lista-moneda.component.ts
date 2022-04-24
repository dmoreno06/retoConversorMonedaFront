import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Moneda } from '../models/moneda';
import {MonedaService } from '../service/moneda.service';
@Component({
  selector: 'app-lista-moneda',
  templateUrl: './lista-moneda.component.html',
  styleUrls: ['./lista-moneda.component.css']
})
export class ListaMonedaComponent implements OnInit {

  monedas: Moneda[] = [];
  router: any;

  constructor(
    private monedaService: MonedaService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarMonedas();
  }

  cargarMonedas(): void{
    this.monedaService.lista().subscribe(
      data =>{
        this.monedas = data;
      },
      err =>{
        console.log(err);
      }
    );
  }

  borrar(idMoneda: number){
    this.monedaService.eliminar(idMoneda).subscribe(
      data =>{
        this.toastr.success('Moneda Eliminada', 'ok',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.cargarMonedas();
      },
      err =>{
        this.toastr.error(err.error.MensajeDTO, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/'])
      }
    )
  }
}
