import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { IngresarComponent } from './login/ingresar/ingresar.component';
import { RegistrarseComponent } from './login/registrarse/registrarse.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FiltroTramitesPipe } from './pipe/filtro-tramites.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MenusesionComponent } from './menu/menusesion/menusesion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MenuadminsesionComponent } from './menu/menuadminsesion/menuadminsesion.component';
import { ModuloFuncionarioComponent } from './inicio/modulo-funcionario/modulo-funcionario.component';
import { ModuloAdminComponent } from './inicio/modulo-admin/modulo-admin.component';
import { ModuloUsuarioComponent } from './inicio/modulo-usuario/modulo-usuario.component';
import { MenuFuncionarioComponent } from './menu/menu-funcionario/menu-funcionario.component';
import { FiltroUsuarioFPipe } from './pipe/filtro-usuario-f.pipe';
import { TramitesComponent } from './Usuario/tramites/tramites/tramites.component';
import { TramitesGobiernoComponent } from './Usuario/TramitesGobierno/TramitesGobierno/TramitesGobierno.component';
import { InscripcionDignatariosComponent } from './Usuario/tramites/inscripcion-dignatarios/inscripcion-dignatarios.component';
import { CancelacionPersoneriaComponent } from './Usuario/tramites/cancelacion-personeria/cancelacion-personeria.component';
import { AprobacionReformasComponent } from './Usuario/tramites/aprobacion-reformas/aprobacion-reformas.component';
import { VistainsComponent } from './Usuario/tramites/inscripcion-dignatarios/vistains/vistains.component';
import { VistacanComponent } from './Usuario/tramites/cancelacion-personeria/vistacan/vistacan.component';
import { VistaaproComponent } from './Usuario/tramites/aprobacion-reformas/vistaapro/vistaapro.component';
import { CertificadoExistenciaComponent } from './Usuario/tramites/certificado-existencia/certificado-existencia.component';
import { VistacertComponent } from './Usuario/tramites/certificado-existencia/vistacert/vistacert.component';
import { VistaPersoneriaComponent } from './Usuario/TramitesGobierno/certificacion-personeria/vista-personeria.component';
import { VistaGGComponent } from './Usuario/TramitesGobierno/reconocimiento-personeria/vistaGG/vistaGG.component';
import { RecuperarClaveComponent } from './login/recuperar-clave/recuperar-clave.component';
import { RestablecerClaveComponent } from './login/restablecer-clave/restablecer-clave.component';
import { ConfirmarCuentaComponent } from './login/confirmar-cuenta/confirmar-cuenta.component';
import { Eror404Component } from './inicio/eror404/eror404.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReconocimientoGestioClubComponent } from './Usuario/tramites/reconocimiento-personeria/reconocimiento-gestio-club/reconocimiento-gestio-club.component';
import { ReconocimientoGestioLigaComponent } from './Usuario/tramites/reconocimiento-personeria/reconocimiento-gestio-liga/reconocimiento-gestio-liga.component';
import { ReconocimientoPersonariaComponent } from './Usuario/tramites/reconocimiento-personeria/reconocimiento-personaria.component';
import { VistaComponent } from './Usuario/tramites/reconocimiento-personeria/vista/vista.component';
import { SeletionTipoTramiteComponent } from './Usuario/tramites/reconocimiento-personeria/seletion-tipo-tramite/seletion-tipo-tramite.component';
import { CargaDocumentoLigaComponent } from './Usuario/tramites/reconocimiento-personeria/carga-documento-liga/carga-documento-liga.component';
import { CargaDocumentoClubComponent } from './Usuario/tramites/reconocimiento-personeria/carga-documento-club/carga-documento-club.component';
import { DatosPersonalesComponent } from './Usuario/datos-personales/datos-personales.component';
import { InscripcionGestionComponent } from './Usuario/tramites/inscripcion-dignatarios/inscripcion-gestion/inscripcion-gestion.component';
import { SelectionTipoTramiteIComponent } from './Usuario/tramites/inscripcion-dignatarios/selection-tipo-tramite-i/selection-tipo-tramite-i.component';
import { SelectionTipoTramiteAComponent } from './Usuario/tramites/aprobacion-reformas/selection-tipo-tramite-a/selection-tipo-tramite-a.component';
import { AprobacionGestionComponent } from './Usuario/tramites/aprobacion-reformas/aprobacion-gestion/aprobacion-gestion.component';
import { CertificacionGestionComponent } from './Usuario/TramitesGobierno/certificacion-personeria/certificacion-gestion/certificacion-gestion.component';
import { SelectionTipoTramiteCComponent } from './Usuario/tramites/cancelacion-personeria/selection-tipo-tramite-c/selection-tipo-tramite-c.component';
import { SelectionTipoTramiteCertificacionComponent } from './Usuario/TramitesGobierno/certificacion-personeria/selection-tipo-tramite-certificacion/selection-tipo-tramite-certificacion.component';
import { CancelacionGestionComponent } from './Usuario/tramites/cancelacion-personeria/cancelacion-gestion/cancelacion-gestion.component';
import { SelectionTipoTramiteCeComponent } from './Usuario/tramites/certificado-existencia/selection-tipo-tramite-ce/selection-tipo-tramite-ce.component';
import { CertificadoGestionComponent } from './Usuario/tramites/certificado-existencia/certificado-gestion/certificado-gestion.component';
import { CargaDocumentoCertificadoComponent } from './Usuario/tramites/certificado-existencia/carga-documento-certificado/carga-documento-certificado.component';
import { CargaDocumentoCancelacionComponent } from './Usuario/tramites/cancelacion-personeria/carga-documento-cancelacion/carga-documento-cancelacion.component';
import { CargaDocumentoAprobacionComponent } from './Usuario/tramites/aprobacion-reformas/carga-documento-aprobacion/carga-documento-aprobacion.component';
import { CargaDocumentoInscripcionComponent } from './Usuario/tramites/inscripcion-dignatarios/carga-documento-inscripcion/carga-documento-inscripcion.component';
import { CargaDocumentoCertificacionComponent } from './Usuario/TramitesGobierno/certificacion-personeria/carga-documento-certificacion/carga-documento-certificacion.component';
import { ModuloAddUserComponent } from './inicio/modulo-admin/modulo-add-user/modulo-add-user.component';
import { AddFuncionarioDeporteComponent } from './Administrador/GestionFuncionarios/add-funcionario-deporte/add-funcionario-deporte.component';
import { EditElimFuncionarioDeporteComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-deporte/edit-elim-funcionario-deporte.component';
import { EditElimFuncionarioGobiernoComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-gobierno/edit-elim-funcionario-gobierno.component';
import { AddFuncionarioGobiernoComponent } from './Administrador/GestionFuncionarios/add-funcionario-gobierno/add-funcionario-gobierno.component';
import { SolicitudesComponent } from './Funcionario/FuncionarioDeporte/solicitudes/solicitudes.component';
import { SolicitudGestionComponent } from './Funcionario/FuncionarioDeporte/solicitud-gestion/solicitud-gestion.component';
import { DatosPersonalesGComponent } from './Funcionario/FuncionarioGobierno/datos-personales-g/datos-personales-g.component';
import { DatosPersonalesDComponent } from './Funcionario/FuncionarioDeporte/datos-personales-d/datos-personales-d.component';
import { ModuloFuncionarioGobiernoComponent } from './inicio/modulo-funcionario-gobierno/modulo-funcionario-gobierno.component';
import { MenuFuncionarioGobiernoComponent } from './menu/menu-funcionario-gobierno/menu-funcionario-gobierno.component';
import { SolicitudesgComponent } from './Funcionario/FuncionarioGobierno/solicitudesg/solicitudesg.component';
import { SolicitudesVistaComponent } from './Funcionario/FuncionarioGobierno/solicitudes-vista/solicitudes-vista.component';
import { SolicitudesVistaTComponent } from './Funcionario/FuncionarioGobiernoT/solicitudes-vista/solicitudes-vista.component'; 
import { CambiarClaveComponent } from './Usuario/cambiar-clave/cambiar-clave.component';
import { Vista1aproComponent } from './tramites/vista1apro/vista1apro.component';
import { Vista1canComponent } from './tramites/vista1can/vista1can.component';
import { Vista1insComponent } from './tramites/vista1ins/vista1ins.component';
import { Vista1certComponent } from './tramites/vista1cert/vista1cert.component';
import { Vista1recoComponent } from './tramites/vista1reco/vista1reco.component';
import { VCertificacionComponent } from './tramites/VCertificacion/VCertificacion.component';
import { VReconocimientoComponent } from './tramites/VReconocimiento/VReconocimiento.component';
import { VCancelacionComponent } from './tramites/VCancelacion/VCancelacion.component';
import { HistorialComponent } from './Usuario/tramites/historial/historial.component';
import { DetallesComponent } from './Usuario/tramites/historial/detalles/detalles.component';
import { ReportesComponent } from './Funcionario/FuncionarioDeporte/reportes/reportes.component';
import { ModuloAsuntosInternosComponent } from './inicio/modulo-asuntos-internos/modulo-asuntos-internos.component';
import { MenuAsuntosInternosComponent } from './menu/menu-asuntos-internos/menu-asuntos-internos.component';
import { DatosPersonalesAsComponent } from './Funcionario/AsuntosInternos/datos-personales-as/datos-personales-as.component';
import { ReportesAsuntosComponent } from './Funcionario/AsuntosInternos/reportes-asuntos/reportes-asuntos.component';
import { ModuloFuncionarioGobiernoTramitesComponent } from './inicio/modulo-funcionario-gobierno-tramites/modulo-funcionario-gobierno-tramites.component';
import { MenuFuncionarioGobiernoTramitesComponent } from './menu/menu-funcionario-gobierno-tramites/menu-funcionario-gobierno-tramites.component';
import { DatosPersonalesTComponent } from './Funcionario/FuncionarioGobiernoT/datos-personales-t/datos-personales-t.component';
import { SolicitudestComponent } from './Funcionario/FuncionarioGobiernoT/solicitudest/solicitudest.component';
import { EditElimFuncionarioGobiernoTramitesComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-gobierno-tramites/edit-elim-funcionario-gobierno-tramites.component';
import { AddFuncionarioGobiernoTramitesComponent } from './Administrador/GestionFuncionarios/add-funcionario-gobierno-tramites/add-funcionario-gobierno-tramites.component';
import { ReportesTComponent } from './Funcionario/FuncionarioGobiernoT/reportest/reportest.component';
import { AddFuncionarioAsuntosInternosComponent } from './Administrador/GestionFuncionarios/add-funcionario-asuntos-internos/add-funcionario-asuntos-internos.component';
import { EditElimFuncionarioAsuntosInternosComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-asuntos-internos/edit-elim-funcionario-asuntos-internos.component';
import { VinscripcionRComponent } from './tramites/VInscripcion o Reforma/Vinscripcion-reforma.component';
import { VinscripcionDignatariosComponent } from './tramites/VInscripcionDignatarios/Vinscripcion-dignatarios.component';
import { SeletionTipoTramiteGComponent } from './Usuario/TramitesGobierno/reconocimiento-personeria/seletion-tipo-tramite/seletion-tipo-tramiteG.component';
import { ReconocimientoGestioprimerGradoComponent } from './Usuario/TramitesGobierno/reconocimiento-personeria/reconocimiento-gestio-primer/reconocimiento-gestio-primer.component';
import { ReconocimientoGestiosegundoGradoComponent } from './Usuario/TramitesGobierno/reconocimiento-personeria/reconocimiento-gestio-segundo/reconocimiento-gestio-segundo.component';
import { CargaDocumentoprimerGradoComponent } from './Usuario/TramitesGobierno/reconocimiento-personeria/carga-documento-primer/carga-documento-primer.component';
import { CargaDocumentosegundoGradoComponent } from './Usuario/TramitesGobierno/reconocimiento-personeria/carga-documento-segundo/carga-documento-segundo.component';
import { VistacanJuridicaComponent } from './Usuario/TramitesGobierno/cancelacion-personeria/vistacanJuridica/vistacanJuridica.component';
import { CancelacionGestionPJuridicaComponent } from './Usuario/TramitesGobierno/cancelacion-personeria/cancelacion-gestion-PJuridica/cancelacion-gestion-PJuridica.component';
import { SelectionTipoTramiteJuridicaComponent } from './Usuario/TramitesGobierno/cancelacion-personeria/selection-tipo-tramite-Juridica/selection-tipo-tramite-Juridica.component';
import { CargaDocumentoCancelacionPJuridicaComponent } from './Usuario/TramitesGobierno/cancelacion-personeria/carga-documento-cancelacion-PJuridica/carga-documento-cancelacion-PJuridica.component';
import { VistainsReformaComponent } from './Usuario/TramitesGobierno/inscripcion-reforma/vistains-reforma/vistains-reforma.component';
import { SelectionTipoTramiteReformaComponent } from './Usuario/TramitesGobierno/inscripcion-reforma/selection-tipo-tramite-reforma/selection-tipo-tramite-reforma.component';
import { CargaDocumentoInscripcionReformaComponent } from './Usuario/TramitesGobierno/inscripcion-reforma/carga-documento-inscripcion-reforma/carga-documento-inscripcion-reforma.component';
import { VistainsDignatariosComponent } from './Usuario/TramitesGobierno/inscripcion-dignatarios-gobierno/vistainsDignatarioG/vistainsDignatariosG.component';
import { SelectionTipoTramiteDGComponent } from './Usuario/TramitesGobierno/inscripcion-dignatarios-gobierno/selection-tipo-tramite-DG/selection-tipo-tramite-DG.component';
import { InscripcionGestionDignatariosComponent } from './Usuario/TramitesGobierno/inscripcion-dignatarios-gobierno/inscripcion-gestion-dignatarios/inscripcion-gestion-dignatarios.component';
import { CargaDocumentoInscripcionDignatariosComponent } from './Usuario/TramitesGobierno/inscripcion-dignatarios-gobierno/carga-documento-inscripcion-dignatarios/carga-documento-inscripcion-dignatarios.component';
import { SolicitudGestionGobiernoComponent } from './Funcionario/FuncionarioGobiernoT/solicitud-gestion-gobierno/solicitud-gestion-gobierno.component';
import { InscripcionGestionReformaComponent } from './Usuario/TramitesGobierno/inscripcion-reforma/inscripcion-gestion-Reforma/inscripcion-gestion-reforma.component';
import { CargaDocInscripcionComponent } from './Funcionario/FuncionarioDeporte/solicitud-gestion/carga-doc-inscripcion/carga-doc-inscripcion.component';
import { DatosPersonalesHaciendaComponent } from './Funcionario/FuncionarioHacienda/datos-personales-H/datos-personales-H.component'; 
import { ReportesHaciendaComponent } from './Funcionario/FuncionarioHacienda/reportesH/reportesH.component';
import { SolicitudesVistaHaciendaComponent } from './Funcionario/FuncionarioHacienda/solicitudes-vista-Hacienda/solicitudes-vista-H.component';
import { SolicitudGestionHaciendaComponent } from './Funcionario/FuncionarioHacienda/solicitud-gestion-Hacienda/solicitud-gestion-hacienda.component';
import { SolicitudesHaciendaComponent } from './Funcionario/FuncionarioHacienda/solicitudesH/solicitudesH.component';
import { MenuFuncionarioHaciendaComponent } from './menu/menu-funcionario-hacienda/menu-funcionario-hacienda.component';
//hacienda
import { AddFuncionarioHaciendaComponent } from './Administrador/GestionFuncionarios/add-funcionario-hacienda/add-funcionario-hacienda.component';
import { EditElimFuncionarioHaciendaComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-hacienda/edit-elim-funcionario-hacienda.component';
import { ModuloFuncionarioHaciendaComponent } from './inicio/modulo-funcionario-hacienda/modulo-funcionario-hacienda.component';
import { VistapazsalvoComponent } from './tramites/VistaPazySalvo/Vista-paz-salvo.component';
import { TramitesHaciendaComponent } from './Usuario/TramitesHacienda/TramitesHacienda/TramitesHacienda.component';
import { CargaDocumentoAutomovilComponent } from './Usuario/TramitesHacienda/TramitesHacienda/certificado-pazysalvo/carga-documento-automovil/carga-documento-automovil.component';
import { CargaDocumentoMotocicletaComponent } from './Usuario/TramitesHacienda/TramitesHacienda/certificado-pazysalvo/carga-documento-motocicleta/carga-documento-motocicleta.component';
import { ReconocimientoGestionMotocicletaComponent } from './Usuario/TramitesHacienda/TramitesHacienda/certificado-pazysalvo/reconocimiento-gestion-motocicleta/reconocimiento-gestion-motocicleta.component';
import { ReconocimientoGestionAutomovilComponent } from './Usuario/TramitesHacienda/TramitesHacienda/certificado-pazysalvo/reconocimiento-gestion-automovil/reconocimiento-gestion-automovil.component';
import { SeletionTipoTramitePazySalvoComponent } from './Usuario/TramitesHacienda/TramitesHacienda/certificado-pazysalvo/seletion-tipo-tramite/seletion-tipo-tramitePazySalvo.component';
import { VistaPSComponent } from './Usuario/TramitesHacienda/TramitesHacienda/certificado-pazysalvo/vistaPS/vistaPScomponent';
//TIC
import { ReportesTICComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/reportesTIC/reportesa-TIC.component';
import { ModuloFuncionarioTICComponent } from './inicio/modulo-funcionario-tic/modulo-funcionario-tic.component';
import { MenuFuncionarioTICComponent } from './menu/menu-funcionario-tic/menu-funcionario-tic.component';
import { TICEditElimFuncionarioHaciendaComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/tic-edit-elim-funcionario-hacienda/tic-edit-elim-funcionario-hacienda.component';
import { TICEditElimFuncionarioGobiernoTramitesComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/tic-edit-elim-funcionario-gobierno-tramites/tic-edit-elim-funcionario-gobierno-tramites.component';
import { TICEditElimFuncionarioGobiernoComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/tic-edit-elim-funcionario-gobierno/tic-edit-elim-funcionario-gobierno.component';
import { TICEditElimFuncionarioDeporteComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/tic-edit-elim-funcionario-deporte/tic-edit-elim-funcionario-deporte.component';
import { TICEditElimFuncionarioAsuntosInternosComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/tic-edit-elim-funcionario-asuntos-internos/tic-edit-elim-funcionario-asuntos-internos.component';
import { TICAddFuncionarioHaciendaComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/tic-add-funcionario-hacienda/tic-add-funcionario-hacienda.component';
import { TICAddFuncionarioGobiernoTramitesComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/tic-add-funcionario-gobierno-tramites/tic-add-funcionario-gobierno-tramites.component';
import { TICAddFuncionarioGobiernoComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/tic-add-funcionario-gobierno/tic-add-funcionario-gobierno.component';
import { TICAddFuncionarioDeporteComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/tic-add-funcionario-deporte/tic-add-funcionario-deporte.component';
import { TICAddFuncionarioAsuntosInternosComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/tic-add-funcionario-asuntos-internos/tic-add-funcionario-asuntos-internos.component';
import { TICModuloAddUserComponent } from './inicio/modulo-funcionario-tic/modulo-add-user-tic/modulo-add-user.component';
//REPORTES ASUNTOS INTERNOS
import { DeportesReportesAsuntosComponent } from './Funcionario/AsuntosInternos/reportes-deportes/reportes-deportes.component';
import { GobiernoReportesAsuntosComponent } from './Funcionario/AsuntosInternos/reportes-Gobierno/reportes-deportes.component';
import { HaciendaReportesAsuntosComponent } from './Funcionario/AsuntosInternos/reportes-Hacienda/reportes-deportes.component';
//REPORTES FUNCIONARIO TIC
import { TICDeportesReportesComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/reportesTIC/reportes-deportes/reportes-deportes.component';
import { TICGobiernoReportesComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/reportesTIC/reportes-Gobierno/reportes-gobierno.component';
import { TICHaciendaReportesComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/reportesTIC/reportes-Hacienda/reportes-hacienda.component';

//REPORTES ADMIN
import { ADMINDeportesReportesComponent } from './Administrador/GestionFuncionarios/reportesa/reportes-deportes/reportes-deportes.component';
import { ADMINGobiernoReportesComponent } from './Administrador/GestionFuncionarios/reportesa/reportes-Gobierno/reportes-gobierno.component';
import { ADMINHaciendaReportesComponent } from './Administrador/GestionFuncionarios/reportesa/reportes-Hacienda/reportes-hacienda-admin.component';
import { ReportesAComponent } from './Administrador/GestionFuncionarios/reportesa/reportesa.component';
import { AdminCertificadosDetallesComponent } from './Administrador/GestionFuncionarios/DetalleReportesCertificados/AdmindetallesCertificados.component';
import { AdminHistorialComponent } from './Administrador/GestionFuncionarios/DetalleReportesCertificados/historialAdmin/historialAdmin.component';


//ADD editar y eliminar FUNCIONARIO TIC
import { AddFuncionarioTicComponent } from './Administrador/GestionFuncionarios/add-funcionario-tic/add-funcionario-tic.component';
import { EditElimFuncionarioTicComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-tic/edit-elim-funcionario-tic.component';
import { CertificadosDetallesComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/DetalleReportesCertificados/detallesCertificados.component';
import { GeneralHistorialComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/DetalleReportesCertificados/historial/historialGeneral.component';



@NgModule({

  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    FooterComponent,
    IngresarComponent,
    RegistrarseComponent,
    TramitesComponent,
    CertificadosDetallesComponent,
    AdminHistorialComponent,
    AdminCertificadosDetallesComponent,
    GeneralHistorialComponent,
    TICEditElimFuncionarioHaciendaComponent,
    TICEditElimFuncionarioGobiernoTramitesComponent,
    TICEditElimFuncionarioGobiernoComponent,
    TICEditElimFuncionarioDeporteComponent,
    TICEditElimFuncionarioAsuntosInternosComponent,
    TICAddFuncionarioHaciendaComponent,
    TICAddFuncionarioGobiernoTramitesComponent,
    AddFuncionarioHaciendaComponent,
    EditElimFuncionarioHaciendaComponent,
    HaciendaReportesAsuntosComponent,
    TICAddFuncionarioDeporteComponent,
    TICAddFuncionarioGobiernoComponent,
    DeportesReportesAsuntosComponent,
    GobiernoReportesAsuntosComponent,
    TICAddFuncionarioAsuntosInternosComponent,
    TICModuloAddUserComponent,
    TramitesGobiernoComponent,ADMINHaciendaReportesComponent,
    TramitesHaciendaComponent,ADMINDeportesReportesComponent,ADMINGobiernoReportesComponent,
    ReconocimientoPersonariaComponent,TICDeportesReportesComponent,TICGobiernoReportesComponent,
    FiltroTramitesPipe,TICHaciendaReportesComponent,
    VistaComponent,
    InscripcionDignatariosComponent,
    InscripcionGestionDignatariosComponent,
    CancelacionPersoneriaComponent,
    CancelacionGestionPJuridicaComponent,
    AprobacionReformasComponent,
    VistainsComponent,
    VistacanComponent,
    VistacanJuridicaComponent,
    VistainsReformaComponent,
    VistainsDignatariosComponent,
    VistaaproComponent,
    VistapazsalvoComponent,
    CertificadoExistenciaComponent,
    CertificacionGestionComponent,
    VistacertComponent,
    VistaPersoneriaComponent,
    VistaGGComponent,
    MenusesionComponent,
    MenuadminsesionComponent,
    ModuloFuncionarioComponent,
    ModuloAdminComponent,
    ModuloUsuarioComponent,
    MenuFuncionarioComponent,
    ModuloFuncionarioGobiernoTramitesComponent,
    MenuFuncionarioGobiernoTramitesComponent,
    SeletionTipoTramiteComponent,
    SelectionTipoTramiteCertificacionComponent,
    SelectionTipoTramiteJuridicaComponent,
    SelectionTipoTramiteReformaComponent,
    SelectionTipoTramiteDGComponent,
    FiltroUsuarioFPipe,
    RecuperarClaveComponent,
    RestablecerClaveComponent,
    ConfirmarCuentaComponent,
    Eror404Component,
    ReconocimientoGestioClubComponent,
    ReconocimientoGestioLigaComponent,
    ReconocimientoGestioprimerGradoComponent,
    ReconocimientoGestiosegundoGradoComponent,
    CargaDocumentoLigaComponent,
    CargaDocumentoClubComponent,
    CargaDocumentoprimerGradoComponent,
    CargaDocumentosegundoGradoComponent,
    CargaDocumentoCancelacionPJuridicaComponent,
    CargaDocumentoInscripcionReformaComponent,
    CargaDocumentoInscripcionDignatariosComponent,
    CargaDocInscripcionComponent,
    DatosPersonalesComponent,
    DatosPersonalesTComponent,
    DatosPersonalesHaciendaComponent,
    InscripcionGestionComponent,
    InscripcionGestionReformaComponent,
    SelectionTipoTramiteIComponent,
    SelectionTipoTramiteAComponent,
    AprobacionGestionComponent,
    SelectionTipoTramiteCComponent,
    CancelacionGestionComponent,
    SelectionTipoTramiteCeComponent,
    SeletionTipoTramiteGComponent,
    CertificadoGestionComponent,
    CargaDocumentoCertificadoComponent,
    CargaDocumentoCancelacionComponent,
    CargaDocumentoAprobacionComponent,
    CargaDocumentoInscripcionComponent,
    CargaDocumentoCertificacionComponent,
    ModuloAddUserComponent,
    AddFuncionarioDeporteComponent,
    EditElimFuncionarioDeporteComponent,
    EditElimFuncionarioGobiernoComponent,
    EditElimFuncionarioGobiernoTramitesComponent,
    EditElimFuncionarioAsuntosInternosComponent,
    EditElimFuncionarioTicComponent,
    AddFuncionarioGobiernoComponent,
    AddFuncionarioGobiernoTramitesComponent,
    AddFuncionarioAsuntosInternosComponent,
    AddFuncionarioTicComponent,
    SolicitudesComponent,
    SolicitudGestionComponent,
    SolicitudGestionGobiernoComponent,
    SolicitudGestionHaciendaComponent,
    DatosPersonalesGComponent,
    DatosPersonalesDComponent,
    ModuloFuncionarioGobiernoComponent,
    MenuFuncionarioGobiernoComponent,
    MenuFuncionarioHaciendaComponent,
    SolicitudesgComponent,
    SolicitudesHaciendaComponent,
    SolicitudestComponent,
    SolicitudesVistaComponent,
    SolicitudesVistaTComponent,
    SolicitudesVistaHaciendaComponent,
    CambiarClaveComponent,
    Vista1aproComponent,
    Vista1canComponent,
    Vista1insComponent,
    Vista1certComponent,
    Vista1recoComponent,
    VCertificacionComponent,
    VReconocimientoComponent,
    VCancelacionComponent,
    VinscripcionRComponent,
    VinscripcionDignatariosComponent,
    HistorialComponent,
    DetallesComponent,
    ReportesComponent,
    ReportesComponent,
    ModuloAsuntosInternosComponent,
    ModuloFuncionarioHaciendaComponent,
    MenuAsuntosInternosComponent,
    DatosPersonalesAsComponent,
    ReportesAsuntosComponent,
    ReportesTComponent,
    ReportesHaciendaComponent,
    ReportesAComponent,
    CargaDocumentoAutomovilComponent,
    CargaDocumentoMotocicletaComponent,
    ReconocimientoGestionAutomovilComponent,
    ReconocimientoGestionMotocicletaComponent,
    SeletionTipoTramitePazySalvoComponent,
    VistaPSComponent,
    ReportesTICComponent,
    ModuloFuncionarioTICComponent,
    MenuFuncionarioTICComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
    ]),
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
