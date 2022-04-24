export class Moneda {
    idMoneda?: number;
    codigo: String;
    descripcion: String;

    constructor(codigo: String,descripcion: String){
        this.codigo = codigo;
        this.descripcion = descripcion;
    }
}
