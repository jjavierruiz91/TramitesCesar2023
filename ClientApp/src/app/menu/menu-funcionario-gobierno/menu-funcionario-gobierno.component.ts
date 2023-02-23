import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-menu-funcionario-gobierno',
  templateUrl: './menu-funcionario-gobierno.component.html',
  styleUrls: ['./menu-funcionario-gobierno.component.css']
})
export class MenuFuncionarioGobiernoComponent implements OnInit {

  constructor(private router: Router, private servicios: AuthService,  private usuarioService: UsuarioService) { }

  nom: string;
  apelli: string;
  rol: string;
  correo: string;
  espacio: string;
  usuario: Usuario;



  ngOnInit() {
    this.getAll();
    this.espacio=" ";
    this.usuarioService.get(this.servicios.getCodigoUserLocalStore()).subscribe(data => this.usuario = data);

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

  getAll() {
    this.nom=this.servicios.getNombreLocalStore();
    this.apelli=this.servicios.getApellidoLocalStore();
    this.rol=this.servicios.getRolLocalStore();
    this.correo=this.servicios.getCorreoLocalStore();
  }
  CambiarCLave() {
    this.router.navigate(['CambiarClave/' + this.servicios.getTokenLocalStore() + '/'+this.usuario.correo]);
  }

  DatosPersonales() {
    this.router.navigate(['DatosPersonalesFung']);
  }
}
