import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tramite } from 'src/app/models/tramite';
import { TramiteService } from 'src/app/services/tramite.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TramiteSectoriales } from '../../../models/tramite';
import { Location } from '@angular/common';


@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {

  constructor(private serviciosTramite: TramiteService, private router: Router, private service: UsuarioService, private location: Location) { }
  tramite!: Tramite;
  listaTramites: Tramite[];
  userDetails;
  filterPost = '';

  ngOnInit(): void {
    this.tramite = {codtramite: 0, nombre: '', descripcion: '', duracion: '', costo: '', modalidad: '', url: '', sectorial: '' };
    this.getAllTramites();
    this.service.getUsuario().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  getAllTramites() {
    this.serviciosTramite.getTramiteGobierno(TramiteSectoriales.recreacion).subscribe(tramite => this.listaTramites = tramite);
  }

  cancelar() {
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
//cerrar sesion
  logout() {
    localStorage.removeItem('nombres');
    localStorage.removeItem('token');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    this.router.navigate(['Inicio']);
  }
}
