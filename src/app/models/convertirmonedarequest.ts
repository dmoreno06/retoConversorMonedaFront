export class Convertirmonedarequest {

    monedaOrigen: String;
    monedaDestino: String;
    montoaConvertir: number;

    tipoModificacion: String; 
    nombreUsuario: String;
    fechaRegistro: String;

    constructor(tipoModificacion: String, nombreUsuario: String,fechaRegistro: String, monedaOrigen: String,monedaDestino: String, montoaConvertir: number)
    {
        this.monedaOrigen = monedaOrigen;
        this.monedaDestino = monedaDestino;
        this.montoaConvertir = montoaConvertir;

        this.tipoModificacion = tipoModificacion;
        this.nombreUsuario = nombreUsuario;
        this.fechaRegistro = fechaRegistro;
    }
}

