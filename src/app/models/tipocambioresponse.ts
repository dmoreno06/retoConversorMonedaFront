export class Tipocambioresponse {

    monedaOrigen: String;
    monedaDestino: String;
    factorConversion: number;

    constructor( monedaOrigen: String,monedaDestino: String, montoaConvertir: number)
    {
        this.monedaOrigen = monedaOrigen;
        this.monedaDestino = monedaDestino;
        this.factorConversion = montoaConvertir;
    }
}

