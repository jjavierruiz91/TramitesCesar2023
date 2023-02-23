import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarseComponent } from './login/registrarse/registrarse.component';
import { IngresarComponent } from './login/ingresar/ingresar.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthAsuntosInternosGuard } from './auth/auth-asuntos-internos.guard';
import { ModuloAdminComponent } from './inicio/modulo-admin/modulo-admin.component';
import { ModuloFuncionarioComponent } from './inicio/modulo-funcionario/modulo-funcionario.component';
import { ModuloUsuarioComponent } from './inicio/modulo-usuario/modulo-usuario.component';
import { VistaaproComponent } from './Usuario/tramites/aprobacion-reformas/vistaapro/vistaapro.component';
import { VistacanComponent } from './Usuario/tramites/cancelacion-personeria/vistacan/vistacan.component';
import { VistainsComponent } from './Usuario/tramites/inscripcion-dignatarios/vistains/vistains.component';
import { VistacertComponent } from './Usuario/tramites/certificado-existencia/vistacert/vistacert.component';
import { VistaPersoneriaComponent } from './Usuario/TramitesGobierno/certificacion-personeria/vista-personeria.component';
import { VistaGGComponent } from './Usuario/TramitesGobierno/reconocimiento-personeria/vistaGG/vistaGG.component';
import { InscripcionDignatariosComponent } from './Usuario/tramites/inscripcion-dignatarios/inscripcion-dignatarios.component';
import { AprobacionReformasComponent } from './Usuario/tramites/aprobacion-reformas/aprobacion-reformas.component';
import { CancelacionPersoneriaComponent } from './Usuario/tramites/cancelacion-personeria/cancelacion-personeria.component';
import { CertificadoExistenciaComponent } from './Usuario/tramites/certificado-existencia/certificado-existencia.component';
import { RecuperarClaveComponent } from './login/recuperar-clave/recuperar-clave.component';
import { RestablecerClaveComponent } from './login/restablecer-clave/restablecer-clave.component';
import { AuthadminGuard } from './auth/authadmin.guard';
import { AuthFuncionarioGuard } from './auth/auth-funcionario.guard';
import { ConfirmarCuentaComponent } from './login/confirmar-cuenta/confirmar-cuenta.component';
import { Eror404Component } from './inicio/eror404/eror404.component';
import { ReconocimientoGestioLigaComponent } from './Usuario/tramites/reconocimiento-personeria/reconocimiento-gestio-liga/reconocimiento-gestio-liga.component';
import { ReconocimientoGestioClubComponent } from './Usuario/tramites/reconocimiento-personeria/reconocimiento-gestio-club/reconocimiento-gestio-club.component';
import { VistaComponent } from './Usuario/tramites/reconocimiento-personeria/vista/vista.component';
import { TramitesComponent } from './Usuario/tramites/tramites/tramites.component';
import { TramitesGobiernoComponent } from './Usuario/TramitesGobierno/TramitesGobierno/TramitesGobierno.component';
import { SeletionTipoTramiteComponent } from './Usuario/tramites/reconocimiento-personeria/seletion-tipo-tramite/seletion-tipo-tramite.component';
import { CargaDocumentoLigaComponent } from './Usuario/tramites/reconocimiento-personeria/carga-documento-liga/carga-documento-liga.component';
import { CargaDocumentoClubComponent } from './Usuario/tramites/reconocimiento-personeria/carga-documento-club/carga-documento-club.component';
import { DatosPersonalesComponent } from './Usuario/datos-personales/datos-personales.component';
import { SelectionTipoTramiteIComponent } from './Usuario/tramites/inscripcion-dignatarios/selection-tipo-tramite-i/selection-tipo-tramite-i.component';
import { InscripcionGestionComponent } from './Usuario/tramites/inscripcion-dignatarios/inscripcion-gestion/inscripcion-gestion.component';
import { SelectionTipoTramiteAComponent } from './Usuario/tramites/aprobacion-reformas/selection-tipo-tramite-a/selection-tipo-tramite-a.component';
import { SelectionTipoTramiteCComponent } from './Usuario/tramites/cancelacion-personeria/selection-tipo-tramite-c/selection-tipo-tramite-c.component';
import { SelectionTipoTramiteCeComponent } from './Usuario/tramites/certificado-existencia/selection-tipo-tramite-ce/selection-tipo-tramite-ce.component';
import { AprobacionGestionComponent } from './Usuario/tramites/aprobacion-reformas/aprobacion-gestion/aprobacion-gestion.component';
import { CancelacionGestionComponent } from './Usuario/tramites/cancelacion-personeria/cancelacion-gestion/cancelacion-gestion.component';
import { CertificadoGestionComponent } from './Usuario/tramites/certificado-existencia/certificado-gestion/certificado-gestion.component';
import { CargaDocumentoInscripcionComponent } from './Usuario/tramites/inscripcion-dignatarios/carga-documento-inscripcion/carga-documento-inscripcion.component';
import { CargaDocumentoAprobacionComponent } from './Usuario/tramites/aprobacion-reformas/carga-documento-aprobacion/carga-documento-aprobacion.component';
import { CargaDocumentoCancelacionComponent } from './Usuario/tramites/cancelacion-personeria/carga-documento-cancelacion/carga-documento-cancelacion.component';
import { CargaDocumentoCertificadoComponent } from './Usuario/tramites/certificado-existencia/carga-documento-certificado/carga-documento-certificado.component';
import { ModuloAddUserComponent } from './inicio/modulo-admin/modulo-add-user/modulo-add-user.component';
import { AddFuncionarioDeporteComponent } from './Administrador/GestionFuncionarios/add-funcionario-deporte/add-funcionario-deporte.component';
import { EditElimFuncionarioDeporteComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-deporte/edit-elim-funcionario-deporte.component';
import { AddFuncionarioGobiernoComponent } from './Administrador/GestionFuncionarios/add-funcionario-gobierno/add-funcionario-gobierno.component';
import { EditElimFuncionarioGobiernoComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-gobierno/edit-elim-funcionario-gobierno.component';
import { SolicitudesComponent } from './Funcionario/FuncionarioDeporte/solicitudes/solicitudes.component';
import { SolicitudGestionComponent } from './Funcionario/FuncionarioDeporte/solicitud-gestion/solicitud-gestion.component';
import { DatosPersonalesDComponent } from './Funcionario/FuncionarioDeporte/datos-personales-d/datos-personales-d.component';
import { ModuloFuncionarioGobiernoComponent } from './inicio/modulo-funcionario-gobierno/modulo-funcionario-gobierno.component';
import { AuthFuncionariGobiernoGuard } from './auth/auth-funcionari-gobierno.guard';
import { DatosPersonalesGComponent } from './Funcionario/FuncionarioGobierno/datos-personales-g/datos-personales-g.component';
import { SolicitudesVistaComponent } from './Funcionario/FuncionarioGobierno/solicitudes-vista/solicitudes-vista.component';
import { SolicitudesVistaTComponent } from './Funcionario/FuncionarioGobiernoT/solicitudes-vista/solicitudes-vista.component';
import { SolicitudesgComponent } from './Funcionario/FuncionarioGobierno/solicitudesg/solicitudesg.component';
import { CambiarClaveComponent } from './Usuario/cambiar-clave/cambiar-clave.component';
import { Vista1aproComponent } from './tramites/vista1apro/vista1apro.component';
import { Vista1canComponent } from './tramites/vista1can/vista1can.component';
import { Vista1certComponent } from './tramites/vista1cert/vista1cert.component';
import { Vista1insComponent } from './tramites/vista1ins/vista1ins.component';
import { Vista1recoComponent } from './tramites/vista1reco/vista1reco.component';
import { HistorialComponent } from './Usuario/tramites/historial/historial.component';
import { DetallesComponent } from './Usuario/tramites/historial/detalles/detalles.component';
import { ReportesTComponent } from './Funcionario/FuncionarioGobiernoT/reportest/reportest.component';
import { ReportesComponent } from './Funcionario/FuncionarioDeporte/reportes/reportes.component';
import { ModuloAsuntosInternosComponent } from './inicio/modulo-asuntos-internos/modulo-asuntos-internos.component';
import { DatosPersonalesAsComponent } from './Funcionario/AsuntosInternos/datos-personales-as/datos-personales-as.component';
import { ReportesAsuntosComponent } from './Funcionario/AsuntosInternos/reportes-asuntos/reportes-asuntos.component';
import { ModuloFuncionarioGobiernoTramitesComponent } from './inicio/modulo-funcionario-gobierno-tramites/modulo-funcionario-gobierno-tramites.component';
import {  AuthFuncionarioGobiernoTramitesGuard } from './auth/auth-funcionario-gobierno-tramites.guard';
import { DatosPersonalesTComponent } from './Funcionario/FuncionarioGobiernoT/datos-personales-t/datos-personales-t.component';
import { SolicitudestComponent } from './Funcionario/FuncionarioGobiernoT/solicitudest/solicitudest.component';
import { AddFuncionarioGobiernoTramitesComponent } from './Administrador/GestionFuncionarios/add-funcionario-gobierno-tramites/add-funcionario-gobierno-tramites.component';
import { EditElimFuncionarioGobiernoTramitesComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-gobierno-tramites/edit-elim-funcionario-gobierno-tramites.component';
import { AddFuncionarioAsuntosInternosComponent } from './Administrador/GestionFuncionarios/add-funcionario-asuntos-internos/add-funcionario-asuntos-internos.component';
import { EditElimFuncionarioAsuntosInternosComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-asuntos-internos/edit-elim-funcionario-asuntos-internos.component';
import { VCertificacionComponent } from './tramites/VCertificacion/VCertificacion.component';
import { CertificacionGestionComponent } from './Usuario/TramitesGobierno/certificacion-personeria/certificacion-gestion/certificacion-gestion.component';
import { SelectionTipoTramiteCertificacionComponent } from './Usuario/TramitesGobierno/certificacion-personeria/selection-tipo-tramite-certificacion/selection-tipo-tramite-certificacion.component';
import { VReconocimientoComponent } from './tramites/VReconocimiento/VReconocimiento.component';
import { VCancelacionComponent } from './tramites/VCancelacion/VCancelacion.component';
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
import { CargaDocumentoCertificacionComponent } from './Usuario/TramitesGobierno/certificacion-personeria/carga-documento-certificacion/carga-documento-certificacion.component';
import { CargaDocInscripcionComponent } from './Funcionario/FuncionarioDeporte/solicitud-gestion/carga-doc-inscripcion/carga-doc-inscripcion.component';
import { DatosPersonalesHaciendaComponent } from './Funcionario/FuncionarioHacienda/datos-personales-H/datos-personales-H.component';
import { AuthguardFuncionarioHaciendaGuard } from './auth/authguard-funcionario-hacienda.guard';
import { ReportesHaciendaComponent } from './Funcionario/FuncionarioHacienda/reportesH/reportesH.component';
import { SolicitudesVistaHaciendaComponent } from './Funcionario/FuncionarioHacienda/solicitudes-vista-Hacienda/solicitudes-vista-H.component';
import { SolicitudGestionHaciendaComponent } from './Funcionario/FuncionarioHacienda/solicitud-gestion-Hacienda/solicitud-gestion-hacienda.component';
import { SolicitudesHaciendaComponent } from './Funcionario/FuncionarioHacienda/solicitudesH/solicitudesH.component';
import { ModuloFuncionarioHaciendaComponent } from './inicio/modulo-funcionario-hacienda/modulo-funcionario-hacienda.component';
import { VistapazsalvoComponent } from './tramites/VistaPazySalvo/Vista-paz-salvo.component';
import { TramitesHaciendaComponent } from './Usuario/TramitesHacienda/TramitesHacienda/TramitesHacienda.component';
//hacienda
import { CargaDocumentoAutomovilComponent } from './Usuario/TramitesHacienda/TramitesHacienda/certificado-pazysalvo/carga-documento-automovil/carga-documento-automovil.component';
import { CargaDocumentoMotocicletaComponent } from './Usuario/TramitesHacienda/TramitesHacienda/certificado-pazysalvo/carga-documento-motocicleta/carga-documento-motocicleta.component';
import { ReconocimientoGestionAutomovilComponent } from './Usuario/TramitesHacienda/TramitesHacienda/certificado-pazysalvo/reconocimiento-gestion-automovil/reconocimiento-gestion-automovil.component';
import { ReconocimientoGestionMotocicletaComponent } from './Usuario/TramitesHacienda/TramitesHacienda/certificado-pazysalvo/reconocimiento-gestion-motocicleta/reconocimiento-gestion-motocicleta.component';
import { SeletionTipoTramitePazySalvoComponent } from './Usuario/TramitesHacienda/TramitesHacienda/certificado-pazysalvo/seletion-tipo-tramite/seletion-tipo-tramitePazySalvo.component';
import { VistaPSComponent } from './Usuario/TramitesHacienda/TramitesHacienda/certificado-pazysalvo/vistaPS/vistaPScomponent';
import { AddFuncionarioHaciendaComponent } from './Administrador/GestionFuncionarios/add-funcionario-hacienda/add-funcionario-hacienda.component';
import { EditElimFuncionarioHaciendaComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-hacienda/edit-elim-funcionario-hacienda.component';
//tic
import { FuncionarioTICGuard } from './auth/auth-funcionario-tic.guard';
import { ReportesTICComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/reportesTIC/reportesa-TIC.component';
import { ModuloFuncionarioTICComponent } from './inicio/modulo-funcionario-tic/modulo-funcionario-tic.component';
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
import { DeportesReportesAsuntosComponent } from './Funcionario/AsuntosInternos/reportes-deportes/reportes-deportes.component';
import { GobiernoReportesAsuntosComponent } from './Funcionario/AsuntosInternos/reportes-Gobierno/reportes-deportes.component';
import { HaciendaReportesAsuntosComponent } from './Funcionario/AsuntosInternos/reportes-Hacienda/reportes-deportes.component';
import { TICDeportesReportesComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/reportesTIC/reportes-deportes/reportes-deportes.component';
import { TICGobiernoReportesComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/reportesTIC/reportes-Gobierno/reportes-gobierno.component';
import { TICHaciendaReportesComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/reportesTIC/reportes-Hacienda/reportes-hacienda.component';
import { ADMINDeportesReportesComponent } from './Administrador/GestionFuncionarios/reportesa/reportes-deportes/reportes-deportes.component';
import { ADMINGobiernoReportesComponent } from './Administrador/GestionFuncionarios/reportesa/reportes-Gobierno/reportes-gobierno.component';
import { ADMINHaciendaReportesComponent } from './Administrador/GestionFuncionarios/reportesa/reportes-Hacienda/reportes-hacienda-admin.component';
import { ReportesAComponent } from './Administrador/GestionFuncionarios/reportesa/reportesa.component';
//ADD FUNCIONARIO TIC ADMIN 
import { AddFuncionarioTicComponent } from './Administrador/GestionFuncionarios/add-funcionario-tic/add-funcionario-tic.component';
import { EditElimFuncionarioTicComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-tic/edit-elim-funcionario-tic.component';
import { CertificadosDetallesComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/DetalleReportesCertificados/detallesCertificados.component';
import { GeneralHistorialComponent } from './Funcionario/FuncionarioTIC/GestionarFuncionarios/DetalleReportesCertificados/historial/historialGeneral.component';
import { AdminCertificadosDetallesComponent } from './Administrador/GestionFuncionarios/DetalleReportesCertificados/AdmindetallesCertificados.component';
import { AdminHistorialComponent } from './Administrador/GestionFuncionarios/DetalleReportesCertificados/historialAdmin/historialAdmin.component';

const routes: Routes = [
  { path: '', redirectTo: 'Ingresar', pathMatch: 'full' },
  { path: 'PageNotFound', component: Eror404Component },
  { path: 'Inicio', component: InicioComponent },
  { path: 'login/ConfirmacionCuenta/:token/:correo', component: ConfirmarCuentaComponent },
  { path: 'Registrarse', component: RegistrarseComponent },
  { path: 'Ingresar', component: IngresarComponent },
  { path: 'login/identify', component: RecuperarClaveComponent },
  { path: 'login/Restablecer/:token/:correo', component: RestablecerClaveComponent },
  { path: 'Aprobacionvista1', component: Vista1aproComponent },
  { path: 'Cancelacionvista1', component: Vista1canComponent },
  { path: 'Inscripcionvista1', component: Vista1insComponent },
  { path: 'Certificadovista1', component: Vista1certComponent },
  { path: 'Reconocimientovista1', component: Vista1recoComponent },
  { path: 'Certificaciónvista1', component: VCertificacionComponent},
  { path: 'Reconocimiento2vista1', component: VReconocimientoComponent},
  { path: 'CPersoneriavista1', component: VCancelacionComponent},
  { path: 'Inscripciónvista1', component: VinscripcionRComponent},
  { path: 'Dignatariosvista1', component: VinscripcionDignatariosComponent},
  { path: 'Paz y Salvovista1', component: VistapazsalvoComponent},
  

  //RUTAS PARA ADMININISTRADOR SUPER ADMINISTRADOR 
  { path: 'AddUsuarioDeporte', component: AddFuncionarioDeporteComponent, canActivate: [AuthadminGuard] },
  { path: 'detalleFuncionarioDeporte/:id', component: EditElimFuncionarioDeporteComponent, canActivate: [AuthadminGuard] },
  { path: 'AddUsuarioGobierno', component: AddFuncionarioGobiernoComponent, canActivate: [AuthadminGuard] },
  { path: 'detalleFuncionarioGobierno/:id', component: EditElimFuncionarioGobiernoComponent, canActivate: [AuthadminGuard] },
  { path: 'InicioAdmin', component: ModuloAdminComponent, canActivate: [AuthadminGuard] },
  { path: 'InicioAdminAdd', component: ModuloAddUserComponent, canActivate: [AuthadminGuard] },
  { path: 'AddUsuarioGobiernoTramites',component: AddFuncionarioGobiernoTramitesComponent, canActivate: [AuthadminGuard] },
  { path: 'detalleFuncionarioGobiernoTramites/:id', component: EditElimFuncionarioGobiernoTramitesComponent, canActivate:[AuthadminGuard]},
  { path: 'AddUsuarioAsuntosInternos', component: AddFuncionarioAsuntosInternosComponent, canActivate: [AuthadminGuard] },
  { path: 'detalleFuncionarioAsuntosInternos/:id', component: EditElimFuncionarioAsuntosInternosComponent, canActivate:  [AuthadminGuard] },
  { path: 'ReportesA', component : ReportesAComponent, canActivate: [AuthadminGuard]},
  { path: 'AddUsuarioHacienda', component: AddFuncionarioHaciendaComponent, canActivate: [AuthadminGuard]},
  { path: 'detalleFuncionarioHacienda/:id', component: EditElimFuncionarioHaciendaComponent, canActivate: [AuthadminGuard]},
  { path: 'AddUsuarioTic', component: AddFuncionarioTicComponent, canActivate: [AuthadminGuard]},
  { path: 'detalleFuncionarioTic/:id', component: EditElimFuncionarioTicComponent, canActivate:[AuthadminGuard] },
  { path: 'AdminReportesDeportes', component: ADMINDeportesReportesComponent, canActivate: [AuthadminGuard]},
  { path: 'AdminReportesGobierno', component: ADMINGobiernoReportesComponent, canActivate: [AuthadminGuard]},
  { path: 'AdminReportesHacienda', component: ADMINHaciendaReportesComponent, canActivate: [AuthadminGuard]},
  { path: 'DetallesAdmin/:detalleAdmin', component:AdminCertificadosDetallesComponent, canActivate:[AuthadminGuard] },
  { path: 'AdminHistorial', component: AdminHistorialComponent, canActivate: [AuthadminGuard]},




  //RUTAS PARA USUARIOS

  { path: 'InicioUsuario', component: ModuloUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'Historial', component: HistorialComponent, canActivate: [AuthGuard] },
  { path: 'CambiarClave/:token/:correo', component: CambiarClaveComponent },
  { path: 'Tramites', component: TramitesComponent, canActivate: [AuthGuard] },
  { path: 'TramitesGobierno', component: TramitesGobiernoComponent, canActivate:[AuthGuard] },
  { path: 'TramitesHacienda', component: TramitesHaciendaComponent, canActivate:[AuthGuard]},
  { path: 'Aprobacionvista', component: VistaaproComponent, canActivate: [AuthGuard] },
  { path: 'Cancelacionvista', component: VistacanComponent, canActivate: [AuthGuard] },
  { path: 'Inscripcionvista', component: VistainsComponent, canActivate: [AuthGuard] },
  { path: 'Certificadovista', component: VistacertComponent, canActivate: [AuthGuard] },
  { path: 'Reconocimientovista', component: VistaComponent, canActivate: [AuthGuard] },
  { path: 'Certificaciónvista', component: VistaPersoneriaComponent, canActivate:[AuthGuard] }, 
  { path: 'Reconocimiento2vista', component: VistaGGComponent, canActivate:[AuthGuard] },
  { path: 'CPersoneriavista', component: VistacanJuridicaComponent, canActivate: [AuthGuard]},
  { path: 'Inscripciónvista', component: VistainsReformaComponent, canActivate: [AuthGuard]},
  { path: 'Dignatariosvista', component: VistainsDignatariosComponent, canActivate: [AuthGuard]},
  { path: 'ReconocimientoGestionLigas/:id', component: ReconocimientoGestioLigaComponent, canActivate: [AuthGuard] },
  { path: 'ReconocimientoGestionClub/:id', component: ReconocimientoGestioClubComponent, canActivate: [AuthGuard] },
  { path: 'ReconocimientoGestionprimerGrado/:id', component: ReconocimientoGestioprimerGradoComponent, canActivate: [AuthGuard]},
  { path: 'ReconocimientoGestionsegundoGrado/:id', component: ReconocimientoGestiosegundoGradoComponent, canActivate:[AuthGuard] },
  { path: 'CancelacionGestionPJuridica/:id', component: CancelacionGestionPJuridicaComponent, canActivate: [AuthGuard]},
  { path: 'InscripcionDignatariosGestion/:id', component: InscripcionGestionDignatariosComponent, canActivate: [AuthGuard] },
  { path: 'InscripcionGestion/:id', component: InscripcionGestionComponent, canActivate: [AuthGuard] },
  { path: 'AprobacionGestion/:id', component: AprobacionGestionComponent, canActivate: [AuthGuard] },
  { path: 'CancelacionGestion/:id', component: CancelacionGestionComponent, canActivate: [AuthGuard] },
  { path: 'CertificadoGestion/:id', component: CertificadoGestionComponent, canActivate: [AuthGuard] },
  { path: 'InscripcionOreformaGestion/:id', component: InscripcionGestionReformaComponent, canActivate: [AuthGuard]},
  { path: 'CertificacionGestion/:id', component: CertificacionGestionComponent, canActivate: [AuthGuard] },
  { path: 'ReconocimientoSelection/:id', component: SeletionTipoTramiteComponent, canActivate: [AuthGuard] },
  { path: 'InscripcionSelection/:id', component: SelectionTipoTramiteIComponent, canActivate: [AuthGuard] },
  { path: 'InscripciónSelection/:id', component: SelectionTipoTramiteReformaComponent, canActivate: [AuthGuard]},
  { path: 'AprobacionSelection/:id', component: SelectionTipoTramiteAComponent, canActivate: [AuthGuard] },
  { path: 'CancelacionSelection/:id', component: SelectionTipoTramiteCComponent, canActivate: [AuthGuard] },
  { path: 'CertificadoSelection/:id', component: SelectionTipoTramiteCeComponent, canActivate: [AuthGuard] },
  { path: 'CertificaciónSelection/:id', component: SelectionTipoTramiteCertificacionComponent, canActivate:[AuthGuard] },
  { path: 'Reconocimiento2Selection/:id', component: SeletionTipoTramiteGComponent, canActivate: [AuthGuard] },
  { path: 'CPersoneriaSelection/:id', component: SelectionTipoTramiteJuridicaComponent, canActivate: [AuthGuard]},
  { path: 'DignatariosSelection/:id', component: SelectionTipoTramiteDGComponent, canActivate: [AuthGuard]},
  { path: 'CargarDocumentoRLigas/:id/:codt', component: CargaDocumentoLigaComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoRClub/:id/:codt', component: CargaDocumentoClubComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoInscripcion/:id/:codt', component: CargaDocumentoInscripcionComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoAprobacion/:id/:codt', component: CargaDocumentoAprobacionComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoCancelacion/:id/:codt', component: CargaDocumentoCancelacionComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoCertificado/:id/:codt', component: CargaDocumentoCertificadoComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoCertificacion/:id/:codt', component: CargaDocumentoCertificacionComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoPRIMER GRADO/:id/:codt', component: CargaDocumentoprimerGradoComponent, canActivate:[AuthGuard] },
  { path: 'CargarDocumentoSEGUNDO GRADO/:id/:codt', component: CargaDocumentosegundoGradoComponent, canActivate: [AuthGuard]},
  { path: 'CargarDocumentoPJuridica/:id/:codt', component: CargaDocumentoCancelacionPJuridicaComponent, canActivate: [AuthGuard]},
  { path: 'CargarDocumentoInscripcionReforma/:id/:codt', component: CargaDocumentoInscripcionReformaComponent, canActivate: [AuthGuard]},
  { path: 'CargarDocumetoInscripcionDignatarios/:id/:codt', component: CargaDocumentoInscripcionDignatariosComponent, canActivate: [AuthGuard]},
  { path: 'DatosPersonales', component: DatosPersonalesComponent, canActivate: [AuthGuard] },
  { path: 'Detalles/:detalleC', component: DetallesComponent, canActivate: [AuthGuard] },
  
  

//HACIENDA

  { path: 'CargarDocumentoAutomovil/:id/:codt', component: CargaDocumentoAutomovilComponent, canActivate: [AuthGuard]},
  { path: 'CargarDocumentoMotocicleta/:id/:codt', component: CargaDocumentoMotocicletaComponent, canActivate: [AuthGuard]},
  { path: 'Paz y SalvoGestionAutomovil/:id', component: ReconocimientoGestionAutomovilComponent, canActivate: [AuthGuard]}, 
  { path: 'Paz y SalvoGestionMotocicleta/:id',component: ReconocimientoGestionMotocicletaComponent, canActivate: [AuthGuard]},
  { path: 'Paz y SalvoSelection/:id', component: SeletionTipoTramitePazySalvoComponent, canActivate: [AuthGuard]},
  { path: 'Paz y Salvovista', component: VistaPSComponent, canActivate: [AuthGuard]},

  //RUTAS PARA FUNCIONARIO DEPORTE
  { path: 'InicioFuncionarioDeporte', component: ModuloFuncionarioComponent, canActivate: [AuthFuncionarioGuard] },
  { path: 'Solicitudes', component: SolicitudesComponent, canActivate: [AuthFuncionarioGuard] },
  { path: 'GestionSolicitudes/:idSoli', component: SolicitudGestionComponent, canActivate: [AuthFuncionarioGuard] },
  { path: 'DatosPersonalesFun', component: DatosPersonalesDComponent, canActivate: [AuthFuncionarioGuard] },
  {path:  'Reportes', component: ReportesComponent, canActivate: [AuthFuncionarioGuard]},
  { path: 'CargarDocumentoInscripcionFD/:codDoc/:codSol', component: CargaDocInscripcionComponent, canActivate: [AuthFuncionarioGuard] },



  //RUTAS PARA FUNCIONARIO GOBIERNO
  { path: 'InicioFuncionarioGobierno', component: ModuloFuncionarioGobiernoComponent, canActivate: [AuthFuncionariGobiernoGuard] },
  { path: 'DatosPersonalesFung', component: DatosPersonalesGComponent, canActivate: [AuthFuncionariGobiernoGuard] },
  { path: 'Solicitudesg', component: SolicitudesgComponent, canActivate: [AuthFuncionariGobiernoGuard] },
  { path: 'VerSolicitudes/:idSoli', component: SolicitudesVistaComponent, canActivate: [AuthFuncionariGobiernoGuard] },
  


// RUTAS PARA FUNCIONARIO GOBIERNO TRAMITES 
  { path:   'InicioFuncionarioGobiernoTramites',component:ModuloFuncionarioGobiernoTramitesComponent,canActivate:[AuthFuncionarioGobiernoTramitesGuard] },
  { path:   'DatosPersonalesT', component: DatosPersonalesTComponent, canActivate:[AuthFuncionarioGobiernoTramitesGuard] },
  { path:   'Solicitudest',component : SolicitudestComponent, canActivate: [AuthFuncionarioGobiernoTramitesGuard]},
  { path:   'ReportesT', component : ReportesTComponent, canActivate: [AuthFuncionarioGobiernoTramitesGuard]},
  { path:   'GestionSolicitudesT/:idSoli', component: SolicitudGestionGobiernoComponent, canActivate: [AuthFuncionarioGobiernoTramitesGuard]},
  { path:   'VerSolicitudesT/:idSoli', component: SolicitudesVistaTComponent, canActivate: [AuthFuncionarioGobiernoTramitesGuard]},

  //RUTAS PARA FUNCIONARIO DE ASUNTOS INTERNOS
  {path: 'InicioAsuntosInternos', component: ModuloAsuntosInternosComponent, canActivate: [AuthAsuntosInternosGuard]},
  {path: 'DatosPersonalesAsunt', component: DatosPersonalesAsComponent, canActivate: [AuthAsuntosInternosGuard]},
  {path: 'ReportesAsuntosInternos', component: ReportesAsuntosComponent, canActivate: [AuthAsuntosInternosGuard]},
  {path: 'DeportesReportes', component: DeportesReportesAsuntosComponent, canActivate: [AuthAsuntosInternosGuard]},
  {path: 'GobiernoRepotes', component: GobiernoReportesAsuntosComponent, canActivate:[AuthAsuntosInternosGuard]},
  {path: 'HaciendaReportes', component: HaciendaReportesAsuntosComponent, canActivate: [AuthAsuntosInternosGuard]},


  //RUTAS PARA FUNCIONARIO DE HACIENDA
  { path: 'DatosPersonalesHacienda', component: DatosPersonalesHaciendaComponent, canActivate: [AuthguardFuncionarioHaciendaGuard]},
  { path: 'ReportesH', component: ReportesHaciendaComponent, canActivate: [AuthguardFuncionarioHaciendaGuard]},
  { path: 'VerSolicitudesH/:idSoli', component: SolicitudesVistaHaciendaComponent, canActivate: [AuthguardFuncionarioHaciendaGuard]},
  { path: 'GestionSolicitudesH/:idSoli', component: SolicitudGestionHaciendaComponent, canActivate: [AuthguardFuncionarioHaciendaGuard]},
  { path: 'SolicitudesH', component: SolicitudesHaciendaComponent, canActivate: [AuthguardFuncionarioHaciendaGuard]},
  { path: 'InicioFuncionarioHacienda',component: ModuloFuncionarioHaciendaComponent, canActivate: [AuthguardFuncionarioHaciendaGuard]},

  //RUTAS PARA FUNCIONARIO DE LAS TIC
  { path: 'ReportesTIC', component: ReportesTICComponent, canActivate: [FuncionarioTICGuard]},
  { path: 'InicioFuncionarioTIC', component: ModuloFuncionarioTICComponent, canActivate: [FuncionarioTICGuard]},
  { path: 'AddUsuarioDeportes', component: TICAddFuncionarioDeporteComponent, canActivate: [FuncionarioTICGuard] },
  { path: 'detalleFuncionarioDeportes/:id', component: TICEditElimFuncionarioDeporteComponent, canActivate: [FuncionarioTICGuard] },
  { path: 'AddUsuarioGobiernos', component: TICAddFuncionarioGobiernoComponent, canActivate: [FuncionarioTICGuard] },
  { path: 'detalleFuncionarioGobiernos/:id', component: TICEditElimFuncionarioGobiernoComponent, canActivate: [FuncionarioTICGuard] },
  { path: 'InicioTICAdd', component: TICModuloAddUserComponent, canActivate: [FuncionarioTICGuard] },
  { path: 'AddUsuarioGobiernoTramitess',component: TICAddFuncionarioGobiernoTramitesComponent, canActivate: [FuncionarioTICGuard] },
  { path: 'detalleFuncionarioGobiernoTramitess/:id', component: TICEditElimFuncionarioGobiernoTramitesComponent, canActivate:[FuncionarioTICGuard]},
  { path: 'AddUsuarioAsuntosInternoss', component: TICAddFuncionarioAsuntosInternosComponent, canActivate: [FuncionarioTICGuard] },
  { path: 'detalleFuncionarioAsuntosInternoss/:id', component: TICEditElimFuncionarioAsuntosInternosComponent, canActivate:  [FuncionarioTICGuard] },
  { path: 'ReportesA', component : ReportesAComponent, canActivate: [FuncionarioTICGuard]},
  { path: 'AddUsuarioHaciendas', component: TICAddFuncionarioHaciendaComponent, canActivate: [FuncionarioTICGuard]},
  { path: 'detalleFuncionarioHaciendas/:id', component: TICEditElimFuncionarioHaciendaComponent, canActivate: [FuncionarioTICGuard]},
  { path: 'ReporteDeportestic', component: TICDeportesReportesComponent, canActivate: [FuncionarioTICGuard]},
  { path: 'ReporteGobiernotic', component: TICGobiernoReportesComponent, canActivate: [FuncionarioTICGuard]},
  { path: 'ReporteHaciendatic', component: TICHaciendaReportesComponent, canActivate: [FuncionarioTICGuard]},
  { path: 'DetallesCerti/:detalleCerti', component: CertificadosDetallesComponent, canActivate:[FuncionarioTICGuard] },
  { path: 'HistorialGeneral', component: GeneralHistorialComponent, canActivate:[FuncionarioTICGuard] },


//OTROS
  { path: 'Inscripcion', component: InscripcionDignatariosComponent },
  { path: 'Aprobacion', component: AprobacionReformasComponent },
  { path: 'Cancelacion', component: CancelacionPersoneriaComponent },
  { path: 'Certificado', component: CertificadoExistenciaComponent },
  { path: '**', redirectTo: 'PageNotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
