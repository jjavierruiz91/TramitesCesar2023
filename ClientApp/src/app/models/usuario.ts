export class Usuario {
    codusuario!: number;
    id!: string;
    tipoId!: string;
    nombres!: string;
    apellidos!: string;
    correo!: string;
    celular!: string;
    sexo!: string;
    municipio!: string;
    direccion!: string;
    grupoEtnico!: string;
    fechaNacimiento!: string;
    fechaRegistro!: string
    clave!: string;
    rol!: string;
}
export class ForgotPassword {
    Email!: string;
    ClientURI!: string;
    estado!: string;
}