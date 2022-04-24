import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MonedaService } from '../service/moneda.service';
import { Moneda } from '../models/moneda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-moneda',
  templateUrl: './nuevo-moneda.component.html',
  styleUrls: ['./nuevo-moneda.component.css']
})
export class NuevoMonedaComponent implements OnInit {
  codigo = "";
  descripcion = "";
  valor = 0;

  constructor( 
    private monedaService: MonedaService,
    private toastr: ToastrService,
    private router: Router) {}

  ngOnInit() {
  }
  onNuevo(): void {
    const moneda = new Moneda(this.codigo, this.descripcion);
    this.monedaService.nuevo(moneda).subscribe(
      data => {
        this.toastr.success('Moneda Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
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
