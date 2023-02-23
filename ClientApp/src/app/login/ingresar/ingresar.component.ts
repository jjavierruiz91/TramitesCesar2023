import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  isLoadingResults = false;
  rol: string;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.onLogout();
    if (localStorage.getItem('token') != null){
      this.router.navigateByUrl('Ingresar');
    }
    this.registerForm = this.formBuilder.group({
      'correo': [null, [Validators.email, Validators.required]],
      'password': [null, [Validators.required, Validators.pattern(/^[A-Za-z0-9_-]{8,}$/)]],
    }
    );
  }

  get f() { return this.registerForm.controls; }

  onSubmit(form: NgForm) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.toastr.error('LLene Todos los Campos!', 'Error!');
      return;
    }

    this.authService.login(form)
      .subscribe(res => {
        console.log(res);
        if (res.token) {
          //guardo los datos del usuario loguedo en el localStorage
          localStorage.setItem('token', res.token);
          localStorage.setItem('codigoU', res.codigoU);
          localStorage.setItem('email', res.email);
          localStorage.setItem('rol', res.rol);
          //el condicional es para que me filtre el primer nombre del usuario
          if (((res.apellidos).substring(0, (res.apellidos).indexOf(" "))) == "") {
            localStorage.setItem('apellidos', res.apellidos);
          } else {
            localStorage.setItem('apellidos', (res.apellidos).substring(0, (res.apellidos).indexOf(" ")));
          }
          //el condicional es para que me filtre el primer apellido del usuario
          if (((res.nombres).substring(0, (res.nombres).indexOf(" "))) == "") {
            localStorage.setItem('nombres', res.nombres);
          } else {
            localStorage.setItem('nombres', (res.nombres).substring(0, (res.nombres).indexOf(" ")));
          }

          this.rol = this.authService.getRolLocalStore();
          if (this.rol == "Admin") {
            this.toastr.success('Bienvenido Administrador ' + res.nombres + ' ' + res.apellidos + '!', 'Bienvenido Administrador!');
            this.router.navigate(['InicioAdmin']);
          } else if (this.rol == "Usuario") {
            this.toastr.success('Bienvenid@ ' + res.nombres + ' ' + res.apellidos + '!', 'Bienvenido Usuario!');
            this.router.navigate(['InicioUsuario']);
          } else if(this.rol == "FuncionarioDeporte") {
            this.toastr.success('Bienvenid@ Funcionari@ ' + res.nombres + ' ' + res.apellidos + '!', 'Bienvenid@ Funcionari@ Deporte!');
            this.router.navigate(['InicioFuncionarioDeporte']);
          }else if(this.rol == "FuncionarioGobierno") {
            this.toastr.success('Bienvenid@ Funcionari@' + res.nombres + ' ' + res.apellidos + '!', 'Bienvenid@ Funcionari@ Gobierno!');
            this.router.navigate(['InicioFuncionarioGobierno']);
          }else if(this.rol == "AsuntosInternos")
          {
            this.toastr.success('Bienvenid@ Funcionari@' + res.nombres + ' ' + res.apellidos + '!', 'Bienvenid@ Funcionari@ Asuntos Internos!');
            this.router.navigate(['InicioAsuntosInternos']);

          }else if(this.rol == "FuncionarioGobiernoTramites")
           {
            this.toastr.success('Bienvenid@ Funcionari@' + res.nombres + ' ' + res.apellidos + '!', 'Bienvenid@ Funcionari@ Gobierno Tramites!');
            this.router.navigate(['InicioFuncionarioGobiernoTramites']);
            
          }else if(this.rol == "FuncionarioHacienda") {
            this.toastr.success('Bienvenid@ Funcionari@' + res.nombres + ' ' + res.apellidos + '!', 'Bienvenid@ Funcionari@ De Hacienda!');
            this.router.navigate(['InicioFuncionarioHacienda']);

          }else if(this.rol == "FuncionarioTIC") {
            this.toastr.success('Bienvenid@ Funcionari@' + res.nombres + ' ' + res.apellidos + '!', 'Bienvenid@ Funcionari@ De las TIC!');
            this.router.navigate(['InicioFuncionarioTIC']); 
          }

        } else if(res.mensaje){
          this.toastr.error(res.mensaje, 'Error!');
        }else{
          this.toastr.error('Correo o contraseña incorrecta!', 'Error!');
        }
      }, (err) => {
        console.log(err);
      });
  }

  onFormSubmit(form: NgForm) {
    this.authService.login(form)
      .subscribe(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['Tramites']);
        }
      }, (err) => {
        console.log(err);
      });
  }

  register() {
    this.router.navigate(['Registrarse']);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  onLogout() {
    localStorage.removeItem('nombres');
    localStorage.removeItem('token');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    localStorage.removeItem('codigosolicitud');
    localStorage.removeItem('codigoU');
    // this.router.navigate(['Ingresar']);
  }
}