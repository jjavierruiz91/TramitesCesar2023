import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Documento } from 'src/app/models/documento';
import { Stramite } from 'src/app/models/stramite';
import { Tramite } from 'src/app/models/tramite';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { StramiteService } from 'src/app/services/stramite.service';
import { TramiteService } from 'src/app/services/tramite.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Certificado } from '../../../../models/documento';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(private router: Router, private servicioStramite: StramiteService,
    private servicioDocumentos: DocumentoService, private route: ActivatedRoute,
    private servicioTramite: TramiteService, private authService: AuthService,
    private servicioUsuario: UsuarioService) { }

  documentos: Documento[] = [];
  documentosFiltrados: Documento[] = [];
  solicitud: Stramite;
  tramite: Tramite;
  usuario: Usuario;
  funcionarioDeporte: Usuario;

  certificadocargado: Certificado[] = [];
  certificados: Certificado[] = [];

  ngOnInit() {
    this.getSoticitud();
    this.getAllDocumentos();
    this.getAllCertificados();
  }

  refresh(): void { window.location.reload(); }

  getSoticitud() {
    this.servicioStramite.get(this.route.snapshot.paramMap.get('detalleC')).subscribe(solic => {
      this.solicitud = solic
      this.getTramite();
      this.getUsuario();
    });
  }

  cancelar() {
    this.router.navigate(['Historial'])
      .then(() => {
        window.location.reload();
      });
  }

  agregarIdFuncionario() {
    if (this.solicitud.codFuncionario == 0) {
      this.solicitud.codFuncionario = this.authService.getCodigoUserLocalStore();
      this.servicioStramite.update(this.solicitud).subscribe();
    }
  }

  getUsuario() {
    this.servicioUsuario.get(this.solicitud.codusuario).subscribe(usu => this.usuario = usu);
    this.servicioUsuario.get(this.solicitud.codFuncionario).subscribe(usua => this.funcionarioDeporte = usua);
  }

  getTramite() {
    this.servicioTramite.get(this.solicitud.codtramite).subscribe(tram => this.tramite = tram);
  }

  getAllDocumentos() {
    this.servicioDocumentos.getDocumentos().subscribe(documento => {
      this.documentos = documento
      this.filtarDocumentos();
    });
  }

  filtarDocumentos() {
    this.documentosFiltrados = [];
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      //el condicional con conceptoF es para que el usuario no pueda ver el documento de conceptof ya que es un acto administrativo
      if (element.estado != "ConceptoF" && element.codstramite == Number (this.route.snapshot.paramMap.get('detalleC')  ) ) {
        this.documentosFiltrados.push(element);
      }
    }
  }

  getAllCertificados()
  {
    this.servicioDocumentos.getCertificados().subscribe(certificado => {
      this.certificados = certificado
      this.filtrarCertificados();
    })
  }
  filtrarCertificados()
  {
    this.certificadocargado = [];
    
    for (let index = 0; index < this.certificados.length; index++)
    {
      const element = this.certificados[index];
        if (element.codstramite == Number(this.route.snapshot.paramMap.get('detalleC')) && element.fechacreacion != "" )
      {
        this.certificadocargado.push(element);
      }
      
    }


  }
}
