import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Tramite } from '../models/tramite';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TramiteService {

  constructor(private http: HttpClient) { }

  //baseUrl = "https://localhost:5001/";
  
   baseUrl = 'http://186.118.163.226:9060/';

  //baseUrl = 'http://192.168.1.123:2022/';//Ip privada



  addTramite(tramite: Tramite): Observable<Tramite> {
    return this.http.post<Tramite>(this.baseUrl + 'api/Tramite', tramite, httpOptions).pipe(
      // // tap((newTramite: Tramite) => this.log(`added NewSocio w/ id=${newTramite.codtramite}`)),
      catchError(this.handleError<Tramite>('addTramite'))
    );
  }

  getTipoTLocalStore(): number {
    return Number(localStorage.getItem('tipoTramite'));
  }

  getTramite(): Observable<Tramite[]> {
    return this.http.get<Tramite[]>(this.baseUrl + 'api/Tramite')
      .pipe(
        // tap(_ => this.log("Lista Cargada")),
        catchError(this.handleError<Tramite[]>('getTramite', []))
      );

  }

  getTramiteGobierno(tramite:string): Observable<Tramite[]> { 
    let params = new HttpParams().set('tramiteId', tramite);
   return this.http.get<Tramite[]>(this.baseUrl + `api/Tramite/GetTramiteGobierno`, {params: params}); 
  }

  getTramiteDeporte(tramite:string): Observable<Tramite[]> { 
    let params = new HttpParams().set('tramiteId', tramite);
   return this.http.get<Tramite[]>(this.baseUrl + `api/Tramite/GetTramiteDeporte`, {params: params}); 
  }

  getTramiteHacienda(tramite:string): Observable<Tramite[]> { 
    let params = new HttpParams().set('tramiteId', tramite);
   return this.http.get<Tramite[]>(this.baseUrl + `api/Tramite/GetTramiteHacienda`, {params: params}); 
  }

  get(id: number): Observable<Tramite> {
    const url = `${this.baseUrl + 'api/Tramite'}/${id}`;
    return this.http.get<Tramite>(url).pipe(
    );
  }

  update(tramite: Tramite): Observable<any> {
    const url =

      `${this.baseUrl + 'api/Tramite'}/${tramite.codtramite}`;
    return this.http.put(url, tramite, httpOptions).pipe(
      // // tap(_ => this.log(`updated tramite isbn=${tramite.codtramite}`)),
      catchError(this.handleError<any>('tramite'))
    );
  }

  delete(tramite: Tramite | string): Observable<Tramite> {
    const id = typeof tramite === 'string' ? tramite : tramite.codtramite;
    const url =

      `${this.baseUrl + 'api/Tramite'}/${id}`;

    return this.http.delete<Tramite>(url, httpOptions).pipe(
      // // tap(_ => this.log(`deleted tramite isbn=${id}`)),
      catchError(this.handleError<Tramite>('deleteTask'))
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
    alert(`ServicioTramite: ${message}`);
  }
}
