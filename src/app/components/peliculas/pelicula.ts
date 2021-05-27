export class Pelicula {
    constructor(
        public peliId:number,
        public nombre: string,
        public precioTicket: number,
        public informacion: string,
        public fechaEstreno: Date,
        public habilitado: string,
        public duracion:number,
        public imagen:string
    ) { }

}