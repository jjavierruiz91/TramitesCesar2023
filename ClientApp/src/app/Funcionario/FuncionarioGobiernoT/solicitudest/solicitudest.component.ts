import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { StramiteService } from 'src/app/services/stramite.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TramiteService } from 'src/app/services/tramite.service';
import { Stramite } from 'src/app/models/stramite';
import { Usuario } from 'src/app/models/usuario';
import { Tramite } from 'src/app/models/tramite';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-solicitudest',
  templateUrl: './solicitudest.component.html',
  styleUrls: ['./solicitudest.component.css']
})
export class SolicitudestComponent implements OnInit {

  listasolisitud: Stramite[] = [];
  solicitudes: Stramite[] = [];
  solicitudesPrueba: Stramite[] = [];
  solicitud: Stramite;
  filtrarUser = '';
  usuarios: Usuario[] = [];
  usuariosList: Usuario[] = [];
  tramites: Tramite[] = [];
  tramitesList: Tramite[] = [];

  TipoDato!: string;
  confirmacionClave!: string;
  checkbox!: boolean;

  constructor(private serviciosTramite: TramiteService,
    private solicitudService: StramiteService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private servicioUsuario: UsuarioService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  cancelar() {
    this.router.navigate(['Solicitudest'])
      .then(() => {
        window.location.reload();
      });
  }
  goBack(): void {
    this.location.back();
  }

 gestionar(codigo: string) {
    this.solicitudService.get(codigo).subscribe(solic => {
      this.solicitud = solic
      if (this.solicitud.codFuncionario == Number(localStorage.getItem('codigoU')) || this.solicitud.codFuncionario == 0) {
        this.router.navigate(['GestionSolicitudesT/' + codigo]);
      } else {
        this.toastr.warning('El tramite selecionado lo está revisando otro funcionario!', 'Aviso!');
      }
    });
  }

  getAllUsuarios() {
    // this.usuariosList = new Usuario[];
   
    this.solicitudService.getStramite().subscribe(soli => {
      this.solicitudes = soli
      for (let index = 0; index < this.solicitudes.length; index++) {
        const element = this.solicitudes[index];
        this.servicioUsuario.getUsuario().subscribe(user => {
          this.usuarios = user
          for (let index = 0; index < this.usuarios.length; index++) {
            const element1 = this.usuarios[index];
            if (element.codusuario == element1.codusuario && element.sectorial == "Gobierno") {
              this.usuariosList.push(element1);
              this.solicitudesPrueba.push(element);
            }
          }
        });
        this.serviciosTramite.getTramiteGobierno('Gobierno').subscribe(tra => {
          this.tramites = tra
          for (let index = 0; index < this.tramites.length; index++) {
            const element2 = this.tramites[index];
            if (element.codtramite == element2.codtramite && element.sectorial == "Gobierno") {
              this.tramitesList.push(element2);
            }
          }
        }
        )
      }
    });
  }
}

