import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moneda } from '../models/moneda';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  monedaURL = 'http://localhost:8082/moneda/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Moneda[]>{
    return this.httpClient.get<Moneda[]>(this.monedaURL + 'lista');
  }
  public detalle(codigo: String): Observable<Moneda>{
    return this.httpClient.get<Moneda>(this.monedaURL + `detalle/${codigo}`);
  }
  public nuevo(moneda: Moneda): Observable<any>{
    return this.httpClient.post<any>(this.monedaURL + 'nuevo', moneda);
  }
  public editar(idMoneda: number, moneda: Moneda): Observable<any>{
    return this.httpClient.put<any>(this.monedaURL + `editar/${idMoneda}`, moneda);
  }

  public eliminar(idMoneda: number): Observable<any>{
    return this.httpClient.delete<any>(this.monedaURL + `eliminar/${idMoneda}`);
  }
}
