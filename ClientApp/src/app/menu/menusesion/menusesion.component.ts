import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-menusesion',
  templateUrl: './menusesion.component.html',
  styleUrls: ['./menusesion.component.css']
})
export class MenusesionComponent implements OnInit {

  constructor(private router: Router, private servicios: AuthService, private usuarioService: UsuarioService) { }

  nom: string;
  apelli: string;
  rol: string;
  correo: string;
  espacio: string;
  usuario: Usuario;


  ngOnInit() {
    this.getAll();
    this.espacio = " ";
    this.usuarioService.get(this.servicios.getCodigoUserLocalStore()).subscribe(data => this.usuario = data);
  }

  CambiarCLave() {
    this.router.navigate(['CambiarClave/' + this.servicios.getTokenLocalStore() + '/'+this.usuario.correo]);
  }

  DatosPersonales() {
    this.router.navigate(['DatosPersonales']);
  }

  onLogout() {
    localStorage.removeItem('nombres');
    localStorage.removeItem('token');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    localStorage.removeItem('codigosolicitud');
    localStorage.removeItem('codigoU');
    localStorage.removeItem('tipoTramite');
    this.router.navigate(['Ingresar']);
  }

  getAll() {
    this.nom = this.servicios.getNombreLocalStore();
    this.apelli = this.servicios.getApellidoLocalStore();
    this.rol = this.servicios.getRolLocalStore();
    this.correo = this.servicios.getCorreoLocalStore();
  }
}
