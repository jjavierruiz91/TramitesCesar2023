import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vcertificacion',
  templateUrl: './VCertificacion.component.html',
  styleUrls: ['./VCertificacion.component.css']
})
export class VCertificacionComponent implements OnInit {

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
