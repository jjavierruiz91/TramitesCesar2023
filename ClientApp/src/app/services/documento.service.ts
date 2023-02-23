import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Documento, Certificado } from '../models/documento';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DocumentoService {

  constructor(private http: HttpClient) { }
  
 // baseUrl = "https://localhost:5001/";

  baseUrl = 'http://186.118.163.226:9060/';

  //baseUrl = 'http://192.168.1.123:2022/';//Ip privada


  addDocumento(documento: Documento): Observable<Documento> {
    return this.http.post<Documento>(this.baseUrl + 'api/Documento', documento, httpOptions).pipe(
      // tap((newDocumento: Documento) => this.log(`nuevo documento id=${newDocumento.codocumento}`)),
      catchError(this.handleError<Documento>('addDocumento'))
    );
  }
  addCertificado(certificado: Certificado): Observable<Certificado> {
    return this.http.post<Certificado>(this.baseUrl + 'api/Certificado', certificado, httpOptions).pipe(
      // tap((newDocumento: Documento) => this.log(`nuevo documento id=${newDocumento.codocumento}`)),
      catchError(this.handleError<Certificado>('addCertificado'))
    );
  }

  

  getDocumentos(): Observable<Documento[]> {
    return this.http.get<Documento[]>(this.baseUrl + 'api/Documento')
      .pipe(
        // tap(_ => this.log("Lista Cargada")),
        catchError(this.handleError<Documento[]>('getDocumentos', []))
      );
  }

  getCertificados(): Observable<Certificado[]> {
    return this.http.get<Certificado[]>(this.baseUrl + 'api/Certificado')
      .pipe(
        // tap(_ => this.log("Lista Cargada")),
        catchError(this.handleError<Certificado[]>('getCertificados', []))
      );
  }

  get(id: string): Observable<Documento> {
    const url = `${this.baseUrl + 'api/Documento'}/${id}`;
    return this.http.get<Documento>(url).pipe(
    );
  }

  update(documento: Documento): Observable<any> {
    const url =
      `${this.baseUrl + 'api/Documento'}/${documento.codocumento}`;
    return this.http.put(url, documento, httpOptions).pipe(
      // tap(_ => this.log(`updated documento isbn=${documento.codocumento}`)),
      catchError(this.handleError<any>('documento'))
    );
  }

  cargarDocumentoUpdate(file: File, id: number): Observable<any> {
    const url = this.baseUrl + 'api/Documento/ArchivosPost';
    let formData = new FormData();
    formData.append('file', file)
    formData.append('id', id + "")
    console.log(formData.get("id"))
    console.log(formData.get("file"))
    return this.http.post<any>(url, formData, httpOptions).pipe(
      // tap(_ => this.log(`se actualizo el documento id:${id}`)),
      catchError(this.handleError<any>('File'))
    );
  }

  upload(file: File, id: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('id', id.toString());
    formData.append('file', file);
    const url = this.baseUrl + 'api/Documento/ArchivosPost';
    const request = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(request);
  }

  cargarDocumento(file: any): Observable<any> {
    let formData = new FormData();
    formData.append('file', file)
    // const url =
    //   `${this.baseUrl + 'api/Documento/Archivos'}/${id}`;
    return this.http.post<any>(this.baseUrl + 'api/Documento/Archivos', formData, httpOptions).pipe(
      // tap(_ => this.log(`se actualizo el documento id:${2}`)),
      catchError(this.handleError<any>('file'))
    );
  }

  

  delete(documento: Documento | string): Observable<Documento> {
    const id = typeof documento === 'string' ? documento : documento.codocumento;
    const url =

      `${this.baseUrl + 'api/Documento'}/${id}`;

    return this.http.delete<Documento>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted documento isbn=${id}`)),
      catchError(this.handleError<Documento>('deleteTask'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} Fallo Listado: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    alert(`ServicioDocumento: ${message}`);
  }
}
