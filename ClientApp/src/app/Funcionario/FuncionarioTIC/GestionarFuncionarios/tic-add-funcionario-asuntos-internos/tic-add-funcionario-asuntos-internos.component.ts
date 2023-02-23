import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';
import { Usuario } from 'src/app/models/usuario';

export function ComparePassword(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'app-tic-add-funcionario-asuntos-internos',
  templateUrl: './tic-add-funcionario-asuntos-internos.component.html',
  styleUrls: ['./tic-add-funcionario-asuntos-internos.component.css']
})
export class TICAddFuncionarioAsuntosInternosComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  usuario: Usuario;
  listaUsuarios: Usuario[] = [];
  usuarios: Usuario[] = [];
  filtrarUser = '';
  tipoId: string ;
  sexo: string ;
  municipio: string ;
  grupoEtnico:string;
  
  TipoDato!: string;
  confirmacionClave!: string;
  checkbox!: boolean;

  constructor(private formBuilder: FormBuilder,
    private servicioUsuario: UsuarioService,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.tipoId="";
    this.sexo="";
    this.municipio="";
    this.grupoEtnico="";
    this.usuario = new Usuario();
    this.registerForm = this.formBuilder.group({
      'tipoId': [null, Validators.required],
      'id': [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      'nombres': [null, Validators.required],
      'apellidos': [null, Validators.required],
      'correo': [null, [Validators.email, Validators.required]],
      'celular': [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.minLength(10)]],
      'sexo': [null, Validators.required],
      'municipio': [null, Validators.required],
      'direccion': [null, Validators.required],
      'grupoEtnico': [null, Validators.required],
      'fechaNacimiento': [null, Validators.required],
      'fechaRegistro': [this.obtenerFecha()],
      'password': [null, [Validators.required, Validators.pattern(/^[A-Za-z0-9_-]{8,}$/)]],
      'rol': ["AsuntosInternos"],
      confirmacionClave: [this.confirmacionClave, [Validators.required, Validators.pattern(/^[A-Za-z0-9_-]{1,}$/),], ""],
      checkbox: [this.checkbox, Validators.requiredTrue],
    },
      {
        // Used custom form validator name
        validator: ComparePassword("password", "confirmacionClave")
      }
    );
    this.getAllUsuarios();
  }

  get f() { return this.registerForm.controls; }



  obtenerFecha() {
    let fechaHoy: Date = new Date();
    return `${fechaHoy.getFullYear()}-${('0' + (fechaHoy.getMonth() + 1)).slice(-2)}-${('0' + (fechaHoy.getDate())).slice(-2)}  ${('0' + (fechaHoy.getHours())).slice(-2)}:${('0' + (fechaHoy.getMinutes())).slice(-2)}:${('0' + (fechaHoy.getSeconds())).slice(-2)}`;;
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.add(form);
  }

  add(form: NgForm) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.toastr.error('LLene Todos los Campos!', 'Error!');
      return;
    }
    this.authService.register(form)
      .subscribe(res => {
        this.submitted = false;
        this.toastr.success('Usuario ' + res.nombres + ' Registrad@!', 'Registro Exitoso!');
        this.registerForm.reset();
        this.tipoId="";
        this.sexo="";
        this.municipio="";
        this.grupoEtnico="";
        // this.router.navigate(['Ingresar']);
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
    this.refresh();
    // this.goBack();
  }

  refresh(): void { window.location.reload(); }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

  getAllUsuarios() {
    this.servicioUsuario.getUsuario().subscribe(useri => {
      this.usuarios = useri
      for (let index = 0; index < this.usuarios.length; index++) {
        const element = this.usuarios[index];
        if (element.rol == "AsuntosInternos") {
          this.listaUsuarios.push(element);
        }
      }
    });
  }
}

