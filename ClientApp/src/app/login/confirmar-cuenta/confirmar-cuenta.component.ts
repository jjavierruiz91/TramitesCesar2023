import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-confirmar-cuenta',
  templateUrl: './confirmar-cuenta.component.html',
  styleUrls: ['./confirmar-cuenta.component.css']
})
export class ConfirmarCuentaComponent implements OnInit {
   
  token: string = '';
  correo: string = '';

  constructor(private router: Router,private route: ActivatedRoute,private authService: AuthService,) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    this.correo = this.route.snapshot.paramMap.get('correo');
    this.authService.ConfirmarUsuario(this.correo);
  }

  onSubmit() {
    this.router.navigate(['Inicio']);
  }
}
