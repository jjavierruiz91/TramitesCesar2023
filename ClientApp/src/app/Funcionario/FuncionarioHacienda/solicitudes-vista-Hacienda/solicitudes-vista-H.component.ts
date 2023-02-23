import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Documento, Certificado } from 'src/app/models/documento';
import { Stramite } from 'src/app/models/stramite';
import { Tramite } from 'src/app/models/tramite';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { StramiteService } from 'src/app/services/stramite.service';
import { TramiteService } from 'src/app/services/tramite.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-solicitudes-vista-H',
  templateUrl: './solicitudes-vista-H.component.html',
  styleUrls: ['./solicitudes-vista-H.component.css']
})
export class SolicitudesVistaHaciendaComponent implements OnInit {

  constructor(private router: Router, private servicioStramite: StramiteService,
    private servicioDocumentos: DocumentoService, private route: ActivatedRoute,
    private servicioTramite: TramiteService, private authService: AuthService,
    private servicioUsuario: UsuarioService, private toastr: ToastrService, private formBuilder: FormBuilder) { }

  documentos: Documento[] = [];
  documentosFiltrados: Documento[] = [];
  documentosFiltradosRev: Documento[] = [];
  
  certificados: Certificado[] = [];
  certificadosfiltrados: Certificado[] = [];
  certificadocargado: Certificado[] = [];
  certificado: Certificado;
  

  solicitud: Stramite;
  tramite: Tramite;
  usuario: Usuario;
  funcionarioHacienda: Usuario;
  obser: string = '';
  idsoli: number ;

  certificadosT: Certificado[] = [];

  registerForm!: FormGroup;
  submitted = false;
  file: File;
  file1: File;
  codcertificado: number;


  ngOnInit() {
    this.getSoticitud();
    
    this.tramite = {codtramite: 0, nombre: "", duracion: "", descripcion: "", costo: "", modalidad: "", url: "", sectorial: "Hacienda" }
    this.certificado = {codcertificado: 0,codstramite: 0, fechacreacion: "", url: "", nombrecer: "", Archive: null}
    this.idsoli = Number(this.route.snapshot.paramMap.get('idSoli'));
    console.log("id solicitud "+this.idsoli)
    this.CreacionCertificados();
    this.getAllDocumentos();
    this.getAllCertificados();
    
    this.registerForm = this.formBuilder.group({
      'file1': [null, Validators.required],
    }
    );

     
  }
  UserId: string;
  Firstname: string;
  Lastname: string;
  Email: string;

  onClick(event) {
    this.UserId = event.target.id;
    this.Firstname = document.getElementById("firstname" + this.UserId).innerHTML;
    this.Lastname = document.getElementById("lastname" + this.UserId).innerHTML;
    this.Email = document.getElementById("email" + this.UserId).innerHTML;
  }

  addestu() {

  }

  cancelar()
  {
    this.router.navigate(['SolicitudesH']).then(
      () =>
      {
        window.location.reload();
      }
    )
  }
  get f() { return this.registerForm.controls; }

  refresh(): void { window.location.reload(); }

  getSoticitud() {
    this.servicioStramite.get(this.route.snapshot.paramMap.get('idSoli')).subscribe(solic => {
      this.solicitud = solic
      console.log("solisitud: "+this.solicitud.codFuncionario)
      //this.agregarIdFuncionario();
      console.log("solisitud2: "+this.solicitud.codFuncionario)
      this.getTramite();
      this.getUsuario();
    });
  }
  CreacionCertificados()
  {
    
    this.servicioDocumentos.getCertificados().subscribe( cert => {
        this.certificadosT = cert
        var contador = 0;
        
        for (let index = 0; index < this.certificadosT.length; index++) 
        {
          const element = this.certificadosT[index];
          if (element.codstramite == this.idsoli)
          {
            contador++;
          }
        }
        if(contador == 0)
        {
          this.CrearCertificado();
        }
      }
    )
  }

  agregarIdFuncionario() {
    if (this.solicitud.codFuncionario == 0) {
      this.solicitud.codFuncionario = this.authService.getCodigoUserLocalStore();
      this.servicioStramite.update(this.solicitud).subscribe();
    }
  }

  getUsuario() {
    this.servicioUsuario.get(this.solicitud.codusuario).subscribe(usu => this.usuario = usu);
    this.servicioUsuario.get(this.solicitud.codFuncionario).subscribe(usua => this.funcionarioHacienda = usua);
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

  getAllCertificados()
  {
    this.servicioDocumentos.getCertificados().subscribe(certificado => {
      this.certificados = certificado
      this.filtrarCertificados();
    })
  }

  filtarDocumentos() {
    this.documentosFiltrados = [];
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.codstramite == Number(this.route.snapshot.paramMap.get('idSoli')) ) {
        this.documentosFiltrados.push(element);
      }
    }
  }

  filtrarCertificados()
  {
    this.certificadosfiltrados = [];
    this.certificadocargado = [];
    for (let index = 0; index < this.certificados.length; index++)
    {
      const element = this.certificados[index];
      if (element.codstramite == Number(this.route.snapshot.paramMap.get('idSoli') ) && element.fechacreacion == ""  ) {
        this.certificadosfiltrados.push(element);
        this.codcertificado =  element.codcertificado;
      }
        if (element.codstramite == Number(this.route.snapshot.paramMap.get('idSoli')) && element.fechacreacion != "" )
      {
        this.certificadocargado.push(element);
      }
      
    }


  }
 

  CrearCertificado()
  {
    this.certificado.codstramite = this.idsoli;
    this.certificado.nombrecer = 'Certificado de '+ this.tramite.nombre;
    this.certificado.url = '';
    this.certificado.fechacreacion = '';
    this.servicioDocumentos.addCertificado(this.certificado).subscribe();
    this.refresh();
  }
  

  selectFile(e: any) {
    this.file = <File>e.target.files[0];
    console.log(this.file);
  }

  update(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.toastr.error('LLene Todos los Campos!', 'Error!');
      return;
    }else if (this.file.size > 2e+6)
    {
      this.toastr.error('El archivo supera los 2MB', 'Error!');
    }
    else 
    {
      var contador = 0;
      
    
      for (let index = 0; index < this.documentosFiltrados.length; index++) 
      {
        const element = this.documentosFiltrados[index];
        if (element.estado != "Verificación exitosa.") 
        {
        contador++;
        console.log("el contador es:", contador)
        }
      }    
      console.log("El Contador es: " + contador)
      if (contador == 0)
        {
          this.certificado.Archive = this.file;
          this.certificado.codcertificado = this.codcertificado;
          this.toastr.success('Certificado cargado', 'Aviso');
          this.authService.ActualizarCertificado(this.certificado);
          this.solicitud.estado = "FINALIZADO";
          this.servicioStramite.update(this.solicitud).subscribe(soli => this.solicitud = soli);
          setTimeout(() => {
          this.refresh();
            
            }, 4000);

        }
        else 
        {
          this.toastr.warning('No se han terminado de gestionar los documentos del tramite', 'Aviso!')

        }
    //this.documento.Archive = this.file;
    
    //this.authService.ActualizarDocumento(this.documento);
    // this.goBack();
    // this.regresar();

    }

  }
}
