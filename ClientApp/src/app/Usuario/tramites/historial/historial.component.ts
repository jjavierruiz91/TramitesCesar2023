import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { StramiteService } from 'src/app/services/stramite.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TramiteService } from 'src/app/services/tramite.service';
import { Stramite } from 'src/app/models/stramite';
import { Usuario } from 'src/app/models/usuario';
import { Tramite} from 'src/app/models/tramite';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  listasolisitud: Stramite[] = [];
  solicitudes: Stramite[] = [];
  solicitud: Stramite;
  filtrarUser = '';
  usuario: Usuario;
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
    this.servicioUsuario.get(Number(localStorage.getItem('codigoU'))).subscribe(
      usuario => this.usuario = usuario
    );
    this.getTramites();
  }

  cancelar() {
    this.goBack();
  }
  
  goBack(): void {
    this.location.back();
  }

  DetalleSolicitud(codigo: string) {
    this.solicitudService.get(codigo).subscribe(solic => {
      this.solicitud = solic
      if (this.solicitud.codusuario == Number(localStorage.getItem('codigoU'))) {
        this.router.navigate(['Detalles/' + codigo]);
      } else {
        this.toastr.error('Error en los detalles!', 'Error!');
      }
    });
  }

  getTramites() {
    this.solicitudService.getStramite().subscribe(soli => {
      this.solicitudes = soli

      for (let index = 0; index < this.solicitudes.length; index++) {
        const element = this.solicitudes[index];
        if (element.codusuario == Number(localStorage.getItem('codigoU'))) {
          this.listasolisitud.push(element);

          this.serviciosTramite.getTramite().subscribe(tra => {
            this.tramites = tra
            for (let index = 0; index < this.tramites.length; index++) {
              const element2 = this.tramites[index];

              if (element.codtramite == element2.codtramite) {
                this.tramitesList.push(element2);
              }
            }
          }
          )
        }
      }


    });
  }

  




}

