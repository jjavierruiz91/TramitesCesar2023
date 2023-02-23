import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vistainsDignatariosG',
  templateUrl: './vistainsDignatariosG.component.html',
  styleUrls: ['./vistainsDignatariosG.component.css']
})
export class VistainsDignatariosComponent implements OnInit {

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
