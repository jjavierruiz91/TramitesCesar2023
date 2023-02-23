import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vincripciond',
  templateUrl: './Vinscripcion-dignatarios.component.html',
  styleUrls: ['./Vinscripcion-dignatarios.component.css']
})
export class VinscripcionDignatariosComponent implements OnInit {

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
