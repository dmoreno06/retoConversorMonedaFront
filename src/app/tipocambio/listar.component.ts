import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Tipocambioresponse } from '../models/tipocambioresponse';
import {TipocambioService } from '../service/tipocambio.service';

@Component({
  selector: 'app-listar',
  templateUrl:'./listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  listTipocambioresponse: Tipocambioresponse[] = [];
  router: any;

  constructor(
    private tipocambioService: TipocambioService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.listTiposCambios();
  }

  listTiposCambios(): void{
    this.tipocambioService.lista().subscribe(
      data =>{
        this.listTipocambioresponse = data;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
