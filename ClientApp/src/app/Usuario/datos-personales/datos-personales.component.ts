import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  codusuario: number;
  usuario: Usuario;
  constructor(private authService: AuthService, private usuarioService: UsuarioService, private location: Location) { }

  ngOnInit() {
    this.codusuario = this.authService.getCodigoUserLocalStore();
    this.usuarioService.get(this.codusuario).subscribe(data => this.usuario = data);
  }

  cancelar() {
    this.goBack();
  }
  
  goBack(): void {
    this.location.back();
  }
}
