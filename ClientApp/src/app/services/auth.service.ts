import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Documento, Certificado } from '../models/documento';
import { ForgotPassword } from '../models/usuario';
import { inject } from '@angular/core/testing';

const httpOptionsA = {
  headers: new HttpHeaders().set('Content-Type', 'multipart/form-data')
};
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data; boundary=3' })
};

const options = {} as any;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
 //baseUrl = "https://localhost:5001/";

 baseUrl = 'http://186.118.163.226:9060/';
// baseUrl = 'http://192.168.1.123:2022/'; //Ip privada


  login(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'api/Auth/login', data, {
      reportProgress: true
    })
      .pipe(
        // tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  getUserProfile() {
    return this.http.get(this.baseUrl + 'api/Usuario');
  }
  getNombreLocalStore(): string {
    return localStorage.getItem('nombres');
  }
  getApellidoLocalStore(): string {
    return localStorage.getItem('apellidos');
  }
  getTokenLocalStore(): string {
    return localStorage.getItem('token');
  }
  getCorreoLocalStore(): string {
    return localStorage.getItem('email');
  }
  getRolLocalStore(): string {
    return localStorage.getItem('rol');
  }
  getCodigoUserLocalStore(): number {
    return Number(localStorage.getItem('codigoU'));
  }
  getTipoTLocalStore(): string {
    return localStorage.getItem('tipoTramite');
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'api/Auth/register', data)
      .pipe(
        // tap(_ => this.log('register')),
        catchError(this.handleError('register', []))
      );
  }

  RestablecerClave(correo: string, clave: string) {
    console.log(correo);
    console.log(clave);
    let datos = new FormData();
    datos.append('Password', clave);
    datos.append('Correo', correo);

    const url = this.baseUrl + 'api/Auth/ResetPassword';
    fetch(url, {
      method: 'PUT',
      body: datos
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  SendEmail(data: ForgotPassword) {
    if (data.estado == "1") {
      data.ClientURI = this.baseUrl + 'login/Restablecer/';
    }
    else if(data.estado == "0"){
      data.ClientURI = this.baseUrl + 'login/ConfirmacionCuenta/';
    }
    // console.log(data.ClientURI);
    // console.log(data.Email);
    let datos = new FormData();
    datos.append('Email', data.Email);
    datos.append('ClientURI', data.ClientURI);
    datos.append('estado', data.estado);

    const url = this.baseUrl + 'api/Auth/PostEmail';
    fetch(url, {
      method: 'POST',
      body: datos
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  ConfirmarUsuario(data: string) {
    console.log(data);
    let datos = new FormData();
    datos.append("Correo", data);
    const url = this.baseUrl + 'api/Auth/ActivarUsuario';
    fetch(url, {
      method: 'PUT',
      body: datos
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }


  async ActualizarDocumento(data: Documento) {
    const url = this.baseUrl + 'api/Documento/UpdateDocumento';
    let datos = new FormData();
    datos.append('Id', data.codocumento + "");
    datos.append('Archive', data.Archive, data.Archive.name);
    //debugger
    console.log("datos ", datos);
    fetch(url, {
      method: 'PUT',
      body: datos
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  async ActualizarDocumentoCF(data: Documento) {
    const url = this.baseUrl + 'api/Documento/UpdateDocumentoCF';
    let datos = new FormData();
    datos.append('Id', data.codocumento + "");
    datos.append('Archive', data.Archive, data.Archive.name);
    //debugger
    console.log("datos ", datos);
    fetch(url, {
      method: 'PUT',
      body: datos
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  async ActualizarCertificado(data: Certificado)
  {
    const url = this.baseUrl + 'api/Certificado/UpdateCertificado';
    let datos = new FormData();
    datos.append('Id', data.codcertificado + "");
    datos.append('Archive', data.Archive, data.Archive.name);
    console.log("datos ", datos);
    fetch(url, {
      method: 'PUT',
      body: datos
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  registerArchivo(documento: any): Observable<any> {
    let datos = new FormData();
    datos.append('Id', documento.codocumento.toString());
    datos.append('Archive', documento.Archive);
    console.log(datos)
    return this.http.post<any>(this.baseUrl + 'api/Auth/PostArchivos', datos
    )
      .pipe(
        tap(_ => this.log(`se actualizo el documento id:${documento.codocumento}`)),
        catchError(this.handleError<any>('File'))
      );
  }

  upload(documento: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('Id', documento.codocumento.toString());
    formData.append('Archive', documento.Archive, documento.Archive.name);
    const request = new HttpRequest('POST', this.baseUrl + 'api/Auth/PostArchivos', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(request);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
