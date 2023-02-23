import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Documento } from 'src/app/models/documento';
import { DocumentoService } from 'src/app/services/documento.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { StramiteService } from 'src/app/services/stramite.service';
import { TramiteService } from 'src/app/services/tramite.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Stramite } from 'src/app/models/stramite';
import { Tramite } from 'src/app/models/tramite';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-carga-documento-inscripcion-reforma',
  templateUrl: './carga-documento-inscripcion-reforma.component.html',
  styleUrls: ['./carga-documento-inscripcion-reforma.component.css']
})
export class CargaDocumentoInscripcionReformaComponent implements OnInit {

  documento: Documento;
  registerForm!: FormGroup;
  submitted = false;
  file: File;
  file1: File;
  

  constructor
    (
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private servicioDocumentos: DocumentoService,
      private location: Location,
      private toastr: ToastrService,
      private authService: AuthService,
      private router: Router,
      private servicioStramite: StramiteService,
      private servicioTramite: TramiteService,
      private servicioUsuario: UsuarioService
      

    ) { }
    
    solicitud: Stramite;
    tramite: Tramite;
    usuario: Usuario;

  ngOnInit(): void {
    this.get();
    this.registerForm = this.formBuilder.group({
      'file1': [null, Validators.required],
    }
    );
  }

  getSoticitud() {
    this.servicioStramite.get(this.route.snapshot.paramMap.get('idSoli')).subscribe(solic => {
      this.solicitud = solic
      this.agregarIdFuncionario();
      this.getTramite();
      this.getUsuario();
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
  }

  getTramite() {
    this.servicioTramite.get(this.solicitud.codtramite).subscribe(tram => this.tramite = tram);
  }

  update(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.toastr.error('LLene Todos los Campos!', 'Error!');
      return;
    }
    else if (this.file.size > 2e+6)
    {
      this.toastr.error('El archivo supera los 2MB', 'Error!');
    }
    else 
    {
      this.documento.Archive = this.file;
    this.authService.ActualizarDocumento(this.documento);

    this.toastr.success('Documento cargado', 'Aviso');
    
    setTimeout(() => {
      this.regresar();
        
      }, 5000);
    
    // 

    }

    
  }

  regresar()
  {
    this.router.navigate(['InscripcionOreformaGestion/'+this.route.snapshot.paramMap.get('codt')]).then(
      () =>
      {
        window.location.reload();

      }
    );
  }

  selectFile(e: any) {
    this.file = <File>e.target.files[0];
    console.log(this.file);
  }

  get f() { return this.registerForm.controls; }
  get(): void {
    var id =
      +this.route.snapshot.paramMap.get('id');
    this.servicioDocumentos.get(id.toString())
      .subscribe(doc => this.documento = doc);
  }

  Guardar(): void {
    this.servicioDocumentos.update(this.documento)
      .subscribe(() => this.goBack());
  }

  delete(): void {
    this.servicioDocumentos.delete(this.documento)
      .subscribe(() => this.goBack());
  }

  cancelar() {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
