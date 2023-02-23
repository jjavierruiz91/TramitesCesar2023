import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-datos-personales-H',
  templateUrl: './datos-personales-H.component.html',
  styleUrls: ['./datos-personales-H.component.css']
})
export class DatosPersonalesHaciendaComponent implements OnInit {

  codusuario: number;
  usuario: Usuario;
  constructor(private authService: AuthService, private usuarioService: UsuarioService,private location: Location) { }

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
