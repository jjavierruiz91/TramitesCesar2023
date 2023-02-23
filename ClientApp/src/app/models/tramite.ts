export class Tramite {
    codtramite!: number;
    nombre!: string;
    descripcion!: string;
    duracion!: string;
    costo!: string;
    modalidad!: string;
    url!: string;
    sectorial!: string;
}
export enum TramiteSectoriales{
    recreacion = 'Recreación y Deporte',
    gobierno = 'Gobierno',
    Hacienda = 'Hacienda'
}