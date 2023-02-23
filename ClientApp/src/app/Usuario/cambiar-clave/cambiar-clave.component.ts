import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';



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
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css']
})
export class CambiarClaveComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  isLoadingResults = false;
  rol: string;
  confirmacionClave!: string;
  correo: string = '';
  token: string = '';
  clave: string = '';


  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private location: Location,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    if (this.token == null) {
      console.log("El token ya expiro");
      this.router.navigate(['Ingresar']);
    } else {
      this.registerForm = this.formBuilder.group({
        'password': [null, [Validators.required, Validators.pattern(/^[A-Za-z0-9_-]{8,}$/)]],
        confirmacionClave: [this.confirmacionClave, [Validators.required, Validators.pattern(/^[A-Za-z0-9_-]{1,}$/),], ""],
      },
        {
          // Used custom form validator name
          validator: ComparePassword("password", "confirmacionClave")
        }
      );

    }
  }

  get f() { return this.registerForm.controls; }

  onSubmit(form: NgForm) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.toastr.error('LLene el campo correo electrónico!', 'Error!');
      return;
    } else {
      this.token = this.route.snapshot.paramMap.get('token');
      this.correo = this.route.snapshot.paramMap.get('correo');
      this.clave = this.registerForm.controls.password.value + "";
      this.authService.RestablecerClave(this.correo, this.clave);
      this.toastr.success('Contraseña Actualizada', 'Aviso');
      this.registerForm.reset();
      this.submitted = false;
      this.goBack();
    }

    // this.router.navigate(['Ingresar']);

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

}
