import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Documento } from 'src/app/models/documento';
import { Stramite } from 'src/app/models/stramite';
import { Tramite } from 'src/app/models/tramite';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { StramiteService } from 'src/app/services/stramite.service';
import { TramiteService } from 'src/app/services/tramite.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-reconocimiento-gestio-segundo',
  templateUrl: './reconocimiento-gestio-segundo.component.html',
  styleUrls: ['./reconocimiento-gestio-segundo.component.css']
})
export class ReconocimientoGestiosegundoGradoComponent implements OnInit {

  constructor(private router: Router, private servicioStramite: StramiteService,
    private servicioDocumentos: DocumentoService, private route: ActivatedRoute,
    private servicioTramites: TramiteService, private authService: AuthService,
    private location: Location,
    ) { }

  documentos: Documento[] = [];
  documentosCargados: Documento[] = [];
  documentosList: Documento[] = [];
  documento: Documento;
  solicitudTramite: Stramite;
  codeStramite: number;
  solicitudesT: Stramite[] = [];
  codigotramite: string;
  tramite: Tramite;
  color: string;
  tipotramite: string;

  ngOnInit() {
    this.tipotramite = this.authService.getTipoTLocalStore();
    this.solicitudTramite = { codstramite: 0, codtramite: 0, codusuario: 0, fecha: "", tipoTramite: "", codFuncionario: 0, estado: "", sectorial: "Gobierno" };
    this.documento = { codocumento: 0, codstramite: 0, observacion: "", fechacreacion: "", fechaactualizacion: "", nombredoc: "", url: "", tamanio: 0, estado: "", plantilla: "", Archive: null }
    this.creacionDocumentossegundogrado();
    this.getAllDocumentos();
    this.codigotramite = this.route.snapshot.paramMap.get('id');
  }

  refresh(): void { window.location.reload(); }

  creacionDocumentossegundogrado() {
    this.servicioStramite.getStramite().subscribe(solic => {
      this.solicitudesT = solic
      var contador = 0;
      var estado = "";
      for (let index = 0; index < this.solicitudesT.length; index++) {
        const element = this.solicitudesT[index];
        if (element.codtramite == Number(this.route.snapshot.paramMap.get('id')) && element.codusuario == this.authService.getCodigoUserLocalStore() && element.tipoTramite == "PRIMER GRADO Y SEGUNDO GRADO") {
          contador++;
          // this.solicitudesTUsuario.push(element);
          this.codeStramite = element.codstramite;
          if(element.estado == "FINALIZADO")
            {
              estado = "OK";
            }
            if(element.estado == "EN PROCESO")
            {
              estado = "";
            }
        }
      }
      if (contador == 0 || estado == "OK") {
        this.solicitudTramite.codtramite = Number(this.route.snapshot.paramMap.get('id'));
        this.solicitudTramite.codusuario = this.authService.getCodigoUserLocalStore();
        this.solicitudTramite.tipoTramite = this.authService.getTipoTLocalStore();
        this.solicitudTramite.estado = "EN PROCESO";
        this.servicioStramite.addStramite(this.solicitudTramite).subscribe(res => {
          localStorage.setItem('codigosolicitud', res.codstramite.toString());
          this.crearDocumentosReconocimiento(res.codstramite);
        }, (err) => {
          console.log(err);
        }
        );
      }
    });
  }

  colorEstado(estado: string) {
    if (estado == "Incorrecto") {
      this.color = "#FF0000";
    } else if (estado == "En proceso") {
      this.color = "#ffe205";
    } else {
      this.color = "#05ff1a";
    }
  }

  cancelar() {
    this.router.navigate(['TramitesGobierno']);
  }

  crearDocumentosReconocimiento(codigoStramite: number) {
    //creamos cada uno de los documentos que nececitamos para el tramite de reconocimiento de personeria
    //Documento Estatutos
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'RECONOCIMIENTO DE PERSONERIA';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'RECONOCIMIENTO DE PERSONERIA_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Acta de creación
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Debe tener el documento diligenciado';
    this.documento.nombredoc = 'RADIO DE ACCIÓN';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = '';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Acta de asignación
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'ACTA DE CREACIÓN DE LA ORGANIZACIÓN DE ACCIÓN COMUNAL';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = '';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento CA Junta directiva
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'ACTA DE CONSTITUCIÓN DEL TRIBUNAL DE GARANTÍAS';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = '';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Certificado de Idoneidad Junta directiva
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'LISTA DE ASISTENCIA';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = '';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento CA Organo control
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'ACTA DE ELECCIÓN';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = '';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento FTP Contador
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'LISTADO DE VOTANTES';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = '';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento CA Miembros CD
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'PLANCHAS INSCRITAS';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = '';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento F Reconocimiento Deportivo
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'ACTA DE APROBACIÓN DE ESTATUTOS';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = '';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    this.getAllDocumentos();
    this.refresh();
  }

  getAllDocumentos() {
    this.servicioDocumentos.getDocumentos().subscribe(documento => {
      this.documentos = documento
      this.filtarDocumentosListLigas();
      this.filtarDocumentosCargadosLigas();
    });
  }

  filtarDocumentosListLigas() {
    this.documentosList = [];
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.codstramite == this.codeStramite && (element.estado == "Nuevo" || element.estado == "Incorrecto")) {
        this.documentosList.push(element);
      }
    }
  }

  filtarDocumentosCargadosLigas() {
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.codstramite == this.codeStramite && element.estado != "Nuevo") {
        this.documentosCargados.push(element);
      }
    }
  }
}
