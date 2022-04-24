import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipocambio } from '../models/tipocambio';
import { Creartipocambiorequest } from '../models/creartipocambiorequest';
import { Convertirmonedarequest } from '../models/convertirmonedarequest';
import { Convertirmonedaresponse } from '../models/convertirmonedaresponse';
import { Tipocambioresponse } from '../models/tipocambioresponse';

@Injectable({
  providedIn: 'root'
})
export class TipocambioService {

  tipocambioURL = 'http://localhost:8082/tipoCambio/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Tipocambioresponse[]>{
    return this.httpClient.get<Tipocambioresponse[]>(this.tipocambioURL + 'list');
  }
  public nuevo(creartipocambiorequest: Creartipocambiorequest): Observable<any>{
    return this.httpClient.post<any>(this.tipocambioURL + 'create',creartipocambiorequest);
  }
  public conversor(convertirmonedarequest: Convertirmonedarequest): Observable<any>{
    return this.httpClient.post<any>(this.tipocambioURL + 'convertirMoneda',convertirmonedarequest);
  }



  
  public editar(idMoneda: number, moneda: Tipocambio): Observable<any>{
    return this.httpClient.get<any>(this.tipocambioURL + 'despues');
  }

  
}
