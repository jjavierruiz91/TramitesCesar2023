import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vincripcionr',
  templateUrl: './Vinscripcion-reforma.component.html',
  styleUrls: ['./Vinscripcion-reforma.component.css']
})
export class VinscripcionRComponent implements OnInit {

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
