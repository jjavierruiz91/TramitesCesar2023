import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Usuario, ForgotPassword } from '../../models/usuario';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

// To validate password and confirm password
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
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  usuario!: Usuario;
  confirmacionClave!: string;
  checkbox!: boolean;
  tipoId: string;
  sexo: string;
  municipio: string;
  grupoEtnico: string;
  forgotpassword = new ForgotPassword();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.tipoId = '';
    this.sexo = "";
    this.municipio = '';
    this.grupoEtnico = "";
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
      'rol': ["Usuario"],
      confirmacionClave: [this.confirmacionClave, [Validators.required, Validators.pattern(/^[A-Za-z0-9_-]{1,}$/),], ""],
      checkbox: [this.checkbox, Validators.requiredTrue],
    },
      {
        validator: ComparePassword("password", "confirmacionClave")
      }
    );

  }

  obtenerFecha() {
    let fechaHoy: Date = new Date();
    return `${fechaHoy.getFullYear()}-${('0' + (fechaHoy.getMonth() + 1)).slice(-2)}-${('0' + (fechaHoy.getDate())).slice(-2)}  ${('0' + (fechaHoy.getHours())).slice(-2)}:${('0' + (fechaHoy.getMinutes())).slice(-2)}:${('0' + (fechaHoy.getSeconds())).slice(-2)}`;;
  }

  get f() { return this.registerForm.controls; }

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.toastr.error('LLene Todos los Campos!', 'Error!');
      return;
    }
    this.authService.register(form)
      .subscribe(res => {
        this.toastr.success('Usuario ' + res.nombres + ' Registrad@!', 'Registro Exitoso, ya puede ingresar a su cuenta');
        this.router.navigate(['Ingresar']);
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }

  goBack(): void {
    this.location.back();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.goBack();
  }
}

