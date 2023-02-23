import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vreconocimiento',
  templateUrl: './VReconocimiento.component.html',
  styleUrls: ['./VReconocimiento.component.css']
})
export class VReconocimientoComponent implements OnInit {

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
