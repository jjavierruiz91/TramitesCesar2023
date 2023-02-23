import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario, ForgotPassword } from 'src/app/models/usuario';
import { element } from 'protractor';
import { consoleTestResultHandler } from 'tslint/lib/test';


@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  isLoadingResults = false;
  busquedaEmail = true;
  rol: string;
  usuarios: Usuario[] = [];
  correo: string = '';
  userpassword = new ForgotPassword();
  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private location: Location,
    private authService: AuthService,
    private servicioUsuario: UsuarioService,

  ) { }

  ngOnInit(): void {
    this.getUser();
    if (localStorage.getItem('token') != null)
      this.onLogout();
    this.registerForm = this.formBuilder.group({
      'correo': [null, [Validators.email, Validators.required]]
    }
    );
  }

  get f() { return this.registerForm.controls; }

  onSubmit(form: NgForm) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.toastr.error('LLene el campo correo electrónico!', 'Error!');
      return;
    } else {
      if (this.compara() == false) {
        this.toastr.error('Tu búsqueda no arrojó ningún resultado. Vuelve a intentarlo con otros datos.', 'No hay resultados de búsqueda!');
      }
      else
      {
        this.userpassword.Email =this.registerForm.controls.correo.value+"";
        this.userpassword.estado = "1";
        this.toastr.success('En estos momentos se le envió al correo la confirmación para restablecer su contraseña.','Confirmación');
        this.authService.SendEmail(this.userpassword);
        this.goBack();
      }

    }

  }

  onLogout() {
    localStorage.removeItem('nombres');
    localStorage.removeItem('token');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    localStorage.removeItem('codigosolicitud');
    localStorage.removeItem('codigoU');
    this.router.navigate(['Ingresar']);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

  getUser() {
    this.servicioUsuario.getUsuario().subscribe(user => {
      this.usuarios = user
    });
  }

  compara():boolean{
    this.correo=this.registerForm.controls.correo.value+"";
    for (let index = 0; index < this.usuarios.length; index++) {
      const element = this.usuarios[index];
      if (this.correo.toUpperCase() == element.correo) {
        return true;
      }
    }
    return false;
  }
}
