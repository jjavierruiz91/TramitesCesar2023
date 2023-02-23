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
  selector: 'app-reconocimiento-gestio-club',
  templateUrl: './reconocimiento-gestio-club.component.html',
  styleUrls: ['./reconocimiento-gestio-club.component.css']
})
export class ReconocimientoGestioClubComponent implements OnInit {

  constructor(private router: Router, private servicioStramite: StramiteService,
    private servicioDocumentos: DocumentoService, private route: ActivatedRoute,
    private servicioTramites: TramiteService, private authService: AuthService,
    private location: Location) { }

  documentos: Documento[] = [];
  documentosCargados: Documento[] = [];
  documentosList: Documento[] = [];
  documento: Documento;
  solicitudTramite: Stramite;
  codeStramite: number;
  solicitudesT: Stramite[] = [];
  codigotramite: string;
  // solicitudesTUsuario: Stramite[] = [];
  tramite: Tramite;
  tipotramite: string;
  ngOnInit() {
    this.tipotramite = this.authService.getTipoTLocalStore();
    this.solicitudTramite = { codstramite: 0, codtramite: 0, codusuario: 0, fecha: "", tipoTramite: "", codFuncionario: 0, estado: "", sectorial: "Recreación y Deporte" };
    this.documento = { codocumento: 0, codstramite: 0, observacion: "", fechacreacion: "", fechaactualizacion: "", nombredoc: "", url: "", tamanio: 0, estado: "", plantilla: "", Archive: null }
    this.creacionDocumentosClub();
    this.getAllDocumentos();
    this.codigotramite = this.route.snapshot.paramMap.get('id');
  }

  refresh(): void { window.location.reload(); }

  creacionDocumentosClub() {
    this.servicioStramite.getStramite().subscribe(solic => {
      this.solicitudesT = solic
      var contador = 0;
      var estado = "";
      for (let index = 0; index < this.solicitudesT.length; index++) {
        const element = this.solicitudesT[index];
        if (element.codtramite == Number(this.route.snapshot.paramMap.get('id')) && element.codusuario == this.authService.getCodigoUserLocalStore() && element.tipoTramite == "CLUB") {
          contador++;
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
          this.crearDocumentosClub(res.codstramite);
        }, (err) => {
          console.log(err);
        }
        );
      }
    });
  }
  cancelar()
  {
    this.router.navigate(['Tramites']);


  }
  goBack(): void {
    this.location.back();
  }

  crearDocumentosClub(codigoStramite: number) {
    //creamos cada uno de los documentos que nececitamos para el tramite de reconocimiento de personeria
    //Documento Estatutos
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Estatutos del Club';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Estatutos_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Acta de creación
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Acta de creación';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Acta_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Acta de asignación
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Acta de designación de cargos';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'ActaAsig_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento CA Junta directiva
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Carta de aceptación de cargos - Junta Directiva';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'CA_Junta_Di_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Certificado de Idoneidad Junta directiva
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Certificado de Idoneidad de la Junta directiva';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Certificado_Junta_Di_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento CA Organo control
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Carta de aceptación de cargos - Organo control';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'CA_Organo_control_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento FTP Contador
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Tarjeta Profesional del Contador P.';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'FTP_Contador_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento CA Miembros CD
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Carta de aceptación de cargos - Comisión Disciplinaria';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'CA_Miembros_CD_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento F Reconocimiento Deportivo
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Copia Reconocimiento Deportivo';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'F_Reconocimiento_D_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    this.getAllDocumentos();
    this.refresh();
     //Documento Concepto Favorable
     this.documento.codstramite = codigoStramite;
     this.documento.observacion = '';
     this.documento.nombredoc = 'Concepto Favorable';
     this.documento.url = '';
     this.documento.tamanio = 0;
     this.documento.estado = 'ConceptoF';
     this.documento.plantilla = '';
     this.documento.fechacreacion = '';
     this.servicioDocumentos.addDocumento(this.documento).subscribe();
     this.getAllDocumentos();
     this.refresh();
  }

  public getAllDocumentos() {
    this.servicioDocumentos.getDocumentos().subscribe(documento => {
      this.documentos = documento
      this.filtarDocumentosListClub();
      this.filtarDocumentosCargadosClub();
    });
  }

  filtarDocumentosListClub() {
    this.documentosList = [];
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.codstramite == this.codeStramite && (element.estado == "Nuevo" || element.estado == "Incorrecto")) {
        this.documentosList.push(element);
      }
    }
  }

  filtarDocumentosCargadosClub() {
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.codstramite == this.codeStramite && element.estado != "Nuevo" && element.estado != "ConceptoF" ) {
        this.documentosCargados.push(element);
      }
    }
  }

}
