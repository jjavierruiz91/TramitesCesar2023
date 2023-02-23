import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vistacanJuridica',
  templateUrl: './vistacanJuridica.component.html',
  styleUrls: ['./vistacanJuridica.component.css']
})
export class VistacanJuridicaComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  cancelar() {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
