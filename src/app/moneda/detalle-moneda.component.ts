import { Component, OnInit } from '@angular/core';
import { MonedaService } from '../service/moneda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Moneda } from '../models/moneda';


@Component({
  selector: 'app-detalle-moneda',
  templateUrl: './detalle-moneda.component.html',
  styleUrls: ['./detalle-moneda.component.css']
})
export class DetalleMonedaComponent implements OnInit {
  moneda!: Moneda;

  constructor(
    private monedaService: MonedaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const codigo = this.activatedRoute.snapshot.params['codigo'];
    this.monedaService.detalle(codigo).subscribe(
      data => {
        this.moneda = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }

}
