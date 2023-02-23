export class Documento {
    codocumento!: number;
    codstramite!: number;
    observacion!: string;
    fechacreacion!: string;
    Archive: File;
    fechaactualizacion!: string;
    nombredoc!: string;
    url!: string;
    tamanio!: number;
    estado!: string;
    plantilla!: string;
}

export class Certificado 
{
    codcertificado!: number;
    codstramite!: number;
    fechacreacion!: string;
    nombrecer!: string;
    url!: string;
    Archive: File;

}
