import { Component, OnInit } from '@angular/core';
import { MonedaService } from '../service/moneda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Moneda } from '../models/moneda';

@Component({
  selector: 'app-editar-moneda',
  templateUrl: './editar-moneda.component.html',
  styleUrls: ['./editar-moneda.component.css']
})
export class EditarMonedaComponent implements OnInit {

  moneda!: Moneda;

  constructor(
    private monedaService: MonedaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const idMoneda = this.activatedRoute.snapshot.params['idMoneda'];
    this.monedaService.detalle(idMoneda).subscribe(
      data => {
        this.moneda = data;
      },
      err => {
        this.toastr.error(err.error.MensajeDTO, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  onUpdate():void{
    const idMoneda = this.activatedRoute.snapshot.params['idMoneda'];
    this.monedaService.editar(idMoneda,this.moneda).subscribe(
      data => {
      this.toastr.success('Moneda Editada','ok',{
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      this.router.navigate(['/']);
    },
    err => {
      this.toastr.error(err.error.MensajeDTO, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      this.volver();
    }
    )
  }
  volver(): void {
    this.router.navigate(['/']);
  }

}

