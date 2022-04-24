export class Creartipocambiorequest {

    monedaOrigen: String;
    monedaDestino: String;
    factorConversion: number;
    tipoModificacion: String; 
    nombreUsuario: String;
    fechaRegistro: String;

    constructor(tipoModificacion: String, nombreUsuario: String,fechaRegistro: String, monedaOrigen: String,monedaDestino: String, factorConversion: number){
        this.monedaOrigen = monedaOrigen;
        this.monedaDestino = monedaDestino;
        this.factorConversion = factorConversion;
        this.tipoModificacion = tipoModificacion;
        this.nombreUsuario = nombreUsuario;
        this.fechaRegistro = fechaRegistro;
    }
}

