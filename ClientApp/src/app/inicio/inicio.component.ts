import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Tramite, TramiteSectoriales } from '../models/tramite';
import { TramiteService } from '../services/tramite.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private serviciosTramite: TramiteService, private router: Router,  private location: Location) { }
  tramite!: Tramite;
  listaTramites: Tramite[];
  sectoriales: string[] = [TramiteSectoriales.gobierno, TramiteSectoriales.Hacienda, TramiteSectoriales.recreacion] 

  filterPost = '';

  ngOnInit(): void {
    this.tramite = {codtramite: 0, nombre: '', descripcion: '', duracion: '', costo: '', modalidad: '', url: '', sectorial: '' };
    this.getAllTramites();
  }

  getAllTramites() {
    this.serviciosTramite.getTramite().subscribe(tramite => this.listaTramites = tramite);
  }
//cerrar sesion
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  cancelar() {
    this.goBack();
  }
  
  goBack(): void {
    this.location.back();
  }

  selectSectorial(sectorial?:string){ 
    if(!sectorial) return this.ngOnInit();

    this.serviciosTramite.getTramiteGobierno(sectorial).subscribe(tramite => this.listaTramites = tramite);
    this.serviciosTramite.getTramiteDeporte(sectorial).subscribe(tramite => this.listaTramites = tramite); 
    this.serviciosTramite.getTramiteHacienda(sectorial).subscribe(tramite => this.listaTramites = tramite); 


  }
}
