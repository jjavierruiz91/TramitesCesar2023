import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-tic-edit-elim-funcionario-asuntos-internos',
  templateUrl: './tic-edit-elim-funcionario-asuntos-internos.component.html',
  styleUrls: ['./tic-edit-elim-funcionario-asuntos-internos.component.css']
})
export class TICEditElimFuncionarioAsuntosInternosComponent implements OnInit {

  usuario: Usuario;
  stask: string;
  registerForm!: FormGroup;
  checkbox!: boolean;
  submitted = false;


  constructor
    (
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private servicioUsuario: UsuarioService,
      private location: Location
    ) { }

  onSubmit() {
    return false;
  }

  ngOnInit() {
    this.get();
    this.registerForm = this.formBuilder.group({
      'tipoId': [null, Validators.required],
      'id': [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      'nombres': [null, Validators.required],
      'apellidos': [null, Validators.required],
      'correo': [null, [Validators.email, Validators.required]],
      'celular': [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.minLength(10)]],
      'sexo': [null, Validators.required],
      'fechaNacimiento': [null, Validators.required],
      'rol': ["Funcionario"],
      checkbox: [this.checkbox, Validators.requiredTrue],
    },
    );
  }

  get(): void {
    var id =
      +this.route.snapshot.paramMap.get('id');
    this.servicioUsuario.get(id)
      .subscribe(hero => this.usuario = hero);
  }

  get f() { return this.registerForm.controls; }

  update(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.servicioUsuario.update(this.usuario)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.servicioUsuario.delete(this.usuario)
      .subscribe(() => this.goBack());
  }
  cancelar() {
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
}