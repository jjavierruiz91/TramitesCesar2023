import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-selection-tipo-tramite-certificacion',
  templateUrl: './selection-tipo-tramite-certificacion.component.html',
  styleUrls: ['./selection-tipo-tramite-certificacion.component.css']
})
export class SelectionTipoTramiteCertificacionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
     private toastr: ToastrService,
      private router: Router,
      private location: Location) { }

  registerForm!: FormGroup;
  submitted = false;
  codicgoTram: number;
  tipoTramite: string = '';

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'tipoTramite': [this.tipoTramite, Validators.required],
    });
    this.codicgoTram = Number(this.route.snapshot.paramMap.get('id'))
  }

  get f() { return this.registerForm.controls; }

  onSubmit(form: NgForm) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.toastr.error('LLene Todos los Campos!', 'Error!');
      return;
    } else {
      if (this.tipoTramite =="PRIMER GRADO") {
        this.router.navigate(['CertificadoGestion/' + this.codicgoTram]);
        localStorage.setItem('tipoTramite', this.tipoTramite);
      } else if(this.tipoTramite =="PRIMER GRADO Y SEGUNDO GRADO"){
        this.router.navigate(['CertificacionGestion/' + this.codicgoTram]);
        localStorage.setItem('tipoTramite', this.tipoTramite);
      }
    }
  }

  cancelar() {
    this.submitted = false;
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
}
