import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vista-personeria',
  templateUrl: './vista-personeria.component.html',
  styleUrls: ['./vista-personeria.component.css']
})
export class VistaPersoneriaComponent implements OnInit {

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
